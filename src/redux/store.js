import { configureStore } from "@reduxjs/toolkit";
import EventsReducer from "./slices/EventsSlice";
import paginationReducer from "./slices/paginationSlice";

export default configureStore({
  reducer: {
    events: EventsReducer,
    pagination: paginationReducer,
  },
});
