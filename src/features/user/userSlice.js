import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "eb",
  age: 0,
  email: "22",
};
const userSlice = createSlice({
  name: "user",
  initialState: { value: initialState },

  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = { name: "", age: 0, email: "" };
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
