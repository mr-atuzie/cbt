import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scores: [
    { name: "english", score: 0 },
    { name: "mathematics", score: 0 },
    { name: "history", score: 0 },
    { name: "sport", score: 0 },
  ],
};

const resultSlice = createSlice({
  name: "results",
  initialState,
  reducers: {},
});

export const {} = resultSlice.actions;

export default resultSlice.reducer;
