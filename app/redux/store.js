import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./dataSlice/dataSlice.jsx";

export const store = configureStore({
  reducer: {
    data: dataSliceReducer,
  },
});
