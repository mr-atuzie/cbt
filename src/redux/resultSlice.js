import { createSlice } from "@reduxjs/toolkit";

const scores = [
  { name: "english", score: 0 },
  { name: "mathematics", score: 0 },
  { name: "history", score: 0 },
  { name: "sport", score: 0 },
];

const initialState = { scores };

const resultSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    correctAnswer: (state, action) => {
      const currentSubject = state.scores.find(
        (subject) => subject.name === action.payload.subject
      );

      currentSubject.score += 10;
    },
  },
});

export const {} = resultSlice.actions;

export default resultSlice.reducer;
