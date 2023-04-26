import { createSlice } from "@reduxjs/toolkit";

const scores = [
  { name: "english", score: 0, qa: [] },
  { name: "mathematics", score: 0, qa: [] },
  { name: "history", score: 0, qa: [] },
  { name: "sports", score: 0, qa: [] },
];

const initialState = { scores };

const resultSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    correctAnswer: (state, action) => {
      if (action.payload.index === action.payload.answer) {
        const currentSubject = state.scores.find(
          (subject) => subject.name === action.payload.subject
        );

        if (!currentSubject.qa.includes(action.payload.question)) {
          currentSubject.score += 10;
          currentSubject.qa.push(action.payload.question);
        }
      } else if (action.payload.index !== action.payload.answer) {
        const currentSubject = state.scores.find(
          (subject) => subject.name === action.payload.subject
        );

        if (currentSubject.qa.includes(action.payload.question)) {
          currentSubject.score -= 10;
          currentSubject.qa.pop(action.payload.question);
        }
      }
    },
  },
});

export const { correctAnswer } = resultSlice.actions;

export default resultSlice.reducer;
