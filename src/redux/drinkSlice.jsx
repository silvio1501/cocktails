import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

export const drinkSlice = createSlice({
  name: "DrinkSlice",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSidebar, closeSidebar } = drinkSlice.actions;
