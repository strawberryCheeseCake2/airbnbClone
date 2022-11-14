import { configureStore } from '@reduxjs/toolkit'
import navBarReducer from "./infrastructure/header/nav-bar/navBarSlice";
import roomsReducer from "./features/rooms/roomsSlice";
import wishlistReducer from "./features/wishlists/wishlistSlice";

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    rooms: roomsReducer,
    wishlist: wishlistReducer,
  },
})