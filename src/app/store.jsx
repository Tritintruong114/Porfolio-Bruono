import { configureStore } from "@reduxjs/toolkit";
import fetchDataReducer from "../features/fetchDateSlice";

export const store = configureStore({
  reducer: {
    fetchData: fetchDataReducer,
  },
});
