import { configureStore } from '@reduxjs/toolkit'
import navBarReducer from "./infrastructure/header/nav-bar/navBarSlice";

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
  },
})