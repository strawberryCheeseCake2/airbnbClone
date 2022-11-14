import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRooms = createAsyncThunk("rooms/fetchRooms/", async (categoryId) => {
  const response = await axios.get(
    "https://my-json-server.typicode.com/strawberryCheeseCake2" +
    "/apis/rooms?category_like=" + categoryId
  );
  console.log("fetched");
  return response.data;
})

const initialState = {
  rooms: [],
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
        // Add any fetched posts to the array
        //state.rooms = state.rooms.concat(action.payload);
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
});

export default roomsSlice.reducer