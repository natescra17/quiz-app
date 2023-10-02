import { createSlice } from "@reduxjs/toolkit";

const triviaSlice = createSlice({
    name: "trivia",
    initialState: {
        questions: [],
        score: 0,
        maxScore: 0
    },
    reducers: {
        setTrivia: (state, action) => {
            state.questions = action.payload.questions;
            state.maxScore = action.payload.questions.length;
        },
        addPoints: (state, action) => {
            console.log(state.score, action.payload.points);
            state.score += action.payload.points;
        },
        resetGame: (state, action) => {
            state.maxScore = 0;
            state.score = 0;
            state.questions = [];
        }
    }
});

export const addPoints = triviaSlice.actions.addPoints;
export const resetGame = triviaSlice.actions.resetGame;
export const setTrivia = triviaSlice.actions.setTrivia;

export default triviaSlice.reducer;
