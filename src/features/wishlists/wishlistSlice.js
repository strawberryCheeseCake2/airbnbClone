import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlistItems",
  async () => {
    const response = await axios.get(
      // "https://my-json-server.typicode.com/strawberryCheeseCake2/apis/wishlist/",
      "http://localhost:4000/wishlist/"
      // "https://63723858025414c6370971c2.mockapi.io/wishlist/",
    );
    // console.log("fetched");
    return response.data;
  }
);

export const addNewItemToWishlist = createAsyncThunk(
  "wishlist/addNewItemToWishlist",
  async (itemToAdd) => {
    const response = await axios.post(
      "http://localhost:4000/wishlist/",
      itemToAdd
    );

    return response.data;
  }
);

export const removeItemFromWishlist = createAsyncThunk(
  "wishlist/removeItemFromWishlist",
  async (itemToRemove) => {
    const response = await axios.delete(
      "http://localhost:4000/wishlist/" + itemToRemove.id
    );
  }
);

const initialState = {
  wishlistItems: [],
  shouldScreenRerender: false,
  status: "idle",
  error: null,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleTriggerRerender(state, action) {
      state.shouldScreenRerender = !state.shouldScreenRerender;
    },
    deletedItemFromWishlist(state, action) {
      const itemId = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== itemId
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchWishlist.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.wishlistItems = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewItemToWishlist.fulfilled, (state, action) => {
        state.wishlistItems.push(action.payload);
        console.log("add!");
        console.log(action.payload);
      })
      .addCase(removeItemFromWishlist.fulfilled, (state, action) => {
        console.log(state.wishlist);
      });
  },
});

//console.log(wishlistSlice.actions)
export const { toggleTriggerRerender, deletedItemFromWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
