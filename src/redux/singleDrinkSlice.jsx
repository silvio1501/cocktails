import { createSlice } from "@reduxjs/toolkit";

const baseUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;

const initialState = {
  drink: [],
  isLoading: true,
  isError: false,
};

export const singleDrinkSlice = createSlice({
  name: "Single Drink",
  initialState,
  reducers: {
    startFetch: (state) => {
      state.drink = [];
      state.isError = false;
      state.isLoading = true;
    },
    fetchCompleted: (state, action) => {
      state.drink = action.payload;
      state.isError = false;
      state.isLoading = false;
    },
    fetchError: (state) => {
      state.drink = [];
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { startFetch, fetchCompleted, fetchError } =
  singleDrinkSlice.actions;

export const fetchDrink = (id) => async (dispatch) => {
  dispatch(startFetch);
  try {
    const response = await fetch(baseUrl + id);
    const data = await response.json();
    dispatch(fetchCompleted(data.drinks[0]));
  } catch (error) {
    dispatch(fetchError);
  }
};
