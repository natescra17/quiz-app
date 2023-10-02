import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import triviaReducer from "./trivia";

export const store = configureStore({
    reducer: {
        user: userReducer,
        trivia: triviaReducer
    }
});
