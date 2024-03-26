import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./slices/MoviesSlice";
import paginationReducer from "./slices/paginationSlice";

export default configureStore({
  reducer: {
    movies: MoviesReducer,
    pagination: paginationReducer,
  },
});
