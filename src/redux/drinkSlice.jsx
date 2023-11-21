import { createSlice } from "@reduxjs/toolkit";

const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const initialState = {
  isOpen: false,
  data: [],
  isLoading: true,
  isError: false,
  scroll: 0,
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
    startFetch: (state) => {
      state.data = [];
      state.isError = false;
      state.isLoading = true;
    },
    fetchCompleted: (state, action) => {
      state.data = action.payload;
      state.isError = false;
      state.isLoading = false;
    },
    fetchError: (state) => {
      state.data = [];
      state.isLoading = false;
      state.isError = true;
    },
    saveScroll: (state, action) => {
      state.scroll = action.payload;
    },
    deleteScroll: (state) => {
      state.scroll = 0;
    },
  },
});

export const {
  openSidebar,
  closeSidebar,
  startFetch,
  fetchCompleted,
  fetchError,
  saveScroll,
  deleteScroll,
} = drinkSlice.actions;

export const fetchData =
  (path = "negroni") =>
  async (dispatch) => {
    dispatch(startFetch());
    try {
      const response = await fetch(baseUrl + path);
      const data = await response.json();
      dispatch(fetchCompleted(data.drinks));
    } catch (error) {
      dispatch(fetchError());
    }
  };
