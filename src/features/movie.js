import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movie: {},
    movies: [],
    loading: true,
  },
  reducers: {
    getMovies(state, action) {
      state.movies = action.payload;
      state.loading = false;
    },
    getMovieByTitle(state, action) {
      state.movie = action.payload.payload;
    },
  },
});

export const actions = movieSlice.actions;

export default movieSlice.reducer;
