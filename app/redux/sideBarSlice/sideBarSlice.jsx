import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ref: null,
};

export const sideBarRef = createSlice({
  name: "ref",
  initialState,
  reducers: {
    setRef: (state, action) => {
      state.ref = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRef } = sideBarRef.actions;

export default sideBarRef.reducer;
