import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/user/userSlice";

import postReducer from "../features/user/dataSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer, 
  },
});
