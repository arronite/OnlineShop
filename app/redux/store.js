import { configureStore } from "@reduxjs/toolkit";
import dataSliceReducer from "./dataSlice/dataSlice.jsx";
import sideBarSlice from "./sideBarSlice/sideBarSlice.jsx";

export const store = configureStore({
  reducer: {
    data: dataSliceReducer,
    ref: sideBarSlice,
  },
});
