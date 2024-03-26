import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastVisitedMovie: 0,
  movieOffset: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changeMovieVisit(state, { payload }) {
      state.lastVisitedMovie = payload;
    },
    changeMovieOffset(state, { payload }) {
      state.movieOffset = payload;
    },
  },
});

export const { changeMovieVisit, changeMovieOffset } = paginationSlice.actions;

export default paginationSlice.reducer;
