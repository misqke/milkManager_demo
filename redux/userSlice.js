import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    username: "DEMO",
    password: "demo",
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.username = payload.username;
      state.password = payload.password;
    },
    clearUser: (state) => {
      state.name = "";
      state.username = "DEMO";
      state.password = "demo";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
