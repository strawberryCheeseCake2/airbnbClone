import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchNavIcons = createAsyncThunk("/fetchNavIcons", async () => {
  const response = await axios.get("https://my-json-server.typicode.com/strawberryCheeseCake2/apis/nav-icons");
  return response.data;
});

const initialState = {
  icons: [],
  clickedItemId: "",
  status: "idle",
  error: null
}

export const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    handleClick: (state, action) => {
      let clickedItemIndex;
      state.icons.forEach((icon) => {
        if (icon.id === action.payload) {
          icon.isClicked = true;
          clickedItemIndex = icon.id;
        }
        else {
          icon.isClicked = false;
        }
      });
      state.clickedItemId = clickedItemIndex;
    },
    handleMouseOver: (state, action) => {
      state.icons.forEach((icon) => {
        if (icon.id === action.payload) 
          icon.isHovering = true;
      })
    },
    handleMouseOut: (state, action) => {
      state.icons.forEach((icon) => {
        if (icon.id === action.payload) {
          icon.isHovering = false;
        }
      })
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNavIcons.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchNavIcons.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        //state.icons = state.icons.concat(action.payload);
        const iconData = action.payload;
        state.icons = iconData.map((icon) => {
          return {
            ...icon,
            isClicked: icon.id === 0 ? true : false,
            isHovering: false,
          }
        })
      })
      .addCase(fetchNavIcons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  }
})

// Action creators are generated for each case reducer function
export const { handleClick, handleMouseOver, handleMouseOut } = navBarSlice.actions

export default navBarSlice.reducer