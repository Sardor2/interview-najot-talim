import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
  },
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    logout(state) {
      state.token = "";
    },
  },
});

export const authActions = authSlice.actions;
