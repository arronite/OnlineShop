import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "http://localhost:3000/api/items";

const initialState = {
  data: [],
  loading: "idle",
};

export const fetchData = createAsyncThunk("items/fetchData", async () => {
  return axios.get(URL).then((res) => {
    return res.data;
  });
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.loading = "success";
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dataSlice.actions;

export default dataSlice.reducer;
