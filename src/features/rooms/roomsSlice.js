import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRooms = createAsyncThunk("rooms/fetchRooms/", async (categoryId) => {
  const response = await axios.get(
    "https://my-json-server.typicode.com/strawberryCheeseCake2" +
    "/apis/rooms?category_like=" 
    // "http://localhost:4000/rooms?category_like="
    + categoryId
  );
  //console.log("fetched");
  return { fetchedRooms: response.data, fetchedCategoryId: categoryId };
})

const initialState = {
  rooms: [],
  fetchedCategories: [],
  status: "idle",
  error: null
}

export const roomsSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
 
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRooms.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { fetchedRooms, fetchedCategoryId } = action.payload;
        
        state.rooms = state.rooms.concat(fetchedRooms);

        const foundCategory = state.fetchedCategories.find((cat) => cat === fetchedCategoryId)
        if (!foundCategory)
          state.fetchedCategories = state.fetchedCategories.concat([{id: fetchedCategoryId}]);
        // console.log("room fetched!")
        // console.log(state.rooms)
        //console.log(action.payload)
        // state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
});

export default roomsSlice.reducer