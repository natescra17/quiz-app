import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: ""
    },
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username;
        }
    }
});

export const setUser = userSlice.actions.setUser;

export default userSlice.reducer;
