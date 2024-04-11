import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastVisitedEvent: 0,
  eventOffset: 0,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    changeEventVisit(state, { payload }) {
      state.lastVisitedEvent = payload;
    },
    changeEventOffset(state, { payload }) {
      state.eventOffset = payload;
    },
  },
});

export const { changeEventVisit, changeEventOffset } = paginationSlice.actions;

export default paginationSlice.reducer;
