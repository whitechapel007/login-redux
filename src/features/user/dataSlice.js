import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const url = "https://covidnigeria.herokuapp.com/api";
export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetch(url).then((res) => res.json());
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export default postSlice.reducer;
