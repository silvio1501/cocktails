import { configureStore } from "@reduxjs/toolkit";
import { drinkSlice } from "./drinkSlice";
import { singleDrinkSlice } from "./singleDrinkSlice";

export const store = configureStore({
  reducer: {
    drink: drinkSlice.reducer,
    singleDrink: singleDrinkSlice.reducer,
  },
});
