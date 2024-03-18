import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMovies } from "../../api/api";

export const getMoviesThunk = createAsyncThunk(
  "movies/getMoviesThunk",
  async () => {
    const { data } = await getAllMovies();
    return data;
  }
);

const initialState = {
  movies: [],
  moviesLoading: true,
  moviesError: false,
};

const MoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoviesThunk.pending, (state) => {
      state.moviesLoading = true;
    });
    builder.addCase(getMoviesThunk.fulfilled, (state, action) => {
      state.moviesLoading = false;
      state.movies = action.payload;
      state.moviesError = "";
    });
    builder.addCase(getMoviesThunk.rejected, (state, action) => {
      state.moviesLoading = false;
      state.movies = [];
      state.moviesError = action.error.message;
    });
  },
});

export default MoviesSlice.reducer;
