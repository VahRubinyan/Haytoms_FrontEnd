import { configureStore } from "@reduxjs/toolkit";
import MoviesReducer from "./slices/MoviesSlice";

export default configureStore({
  reducer: {
    movies: MoviesReducer,
  },
});
