import { createSlice } from '@reduxjs/toolkit'
import iconData from "../../../mock/nav-icons.json"

const initialState = {
  icons: iconData.map((icon) => {
    return {
      ...icon,
      isClicked: false,
      isHovering: false,
    }
  })
}

export const navBarSlice = createSlice({
  name: 'navBar',
  initialState,
  reducers: {
    handleClick: (state, action) => {
      state.icons.forEach((icon) => {
        if (icon.id === action.payload) {
          icon.isClicked = true;
          icon.isHovering = false;
        }
        else {
          icon.isClicked = false;
          icon.isHovering = false;
        }
      });
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
})

// Action creators are generated for each case reducer function
export const { handleClick, handleMouseOver, handleMouseOut } = navBarSlice.actions

export default navBarSlice.reducer