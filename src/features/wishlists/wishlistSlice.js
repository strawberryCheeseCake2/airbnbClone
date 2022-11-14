import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWishlist = createAsyncThunk("wishlist/fetchWishlistItems", async () => {
  const response = await axios.get(
    // "https://my-json-server.typicode.com/strawberryCheeseCake2/apis/wishlist/",
    "http://localhost:4000/wishlist",
  );
  console.log("fetched");
  return response.data;
})

export const addNewItemToWishlist = createAsyncThunk(
  "wishlist/addNewItemToWishlist", 
  async (itemToAdd) => {
    const response = await axios.post(
      // "https://my-json-server.typicode.com/strawberryCheeseCake2/apis/wishlist/",
      "http://localhost:4000/wishlist/",
      itemToAdd);
      console.log(itemToAdd)
      console.log(response.data);
      return response.data;
  }
)

// PUT Request
export const removeItemFromWishlist = createAsyncThunk(
  "wishlist/removeItemFromWishlist", 
  async (itemToRemove) => {
    const response = await axios.delete(
      // "https://my-json-server.typicode.com/strawberryCheeseCake2/apis/wishlist/",
      "http://localhost:4000/wishlist/" 
      + itemToRemove.id);
      console.log(response.data);
      return response.data;
  }
)

const initialState = {
  wishlistItems: [],
  shouldScreenRerender: false,
  status: "idle",
  error: null
}

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleTriggerRerender(state, action) {
      state.shouldScreenRerender = !(state.shouldScreenRerender);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWishlist.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        //state.rooms = state.rooms.concat(action.payload);
        state.wishlistItems = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewItemToWishlist.fulfilled, (state, action) => {
        //state.posts.push(action.payload);
        //state.wishlist.push(action.payload);
        console.log("add!")
        console.log(action.payload);
        //console.log(state.wishlist)
      })
      .addCase(removeItemFromWishlist.fulfilled, (state, action) => {
        console.log("re,pve!")
        //console.log(action.payload);
        console.log(state.wishlist)
      })
  }
});

//console.log(wishlistSlice.actions)
export const { toggleTriggerRerender } = wishlistSlice.actions;

export default wishlistSlice.reducer