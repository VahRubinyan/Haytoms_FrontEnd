import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllEvents } from "../../api/api";

export const getEventsThunk = createAsyncThunk(
  "events/getEventsThunk",
  async () => {
    const { data } = await getAllEvents();
    return data;
  }
);

const initialState = {
  events: [],
  eventsLoading: true,
  eventsError: false,
  filteredEventsByToday: [],
};

const EventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEventsThunk.pending, (state) => {
      state.eventsLoading = true;
    });
    builder.addCase(getEventsThunk.fulfilled, (state, action) => {
      state.eventsLoading = false;
      action.payload.events.forEach((event) => {
        event.event_dates.sort((a, b) => {
          let date1 = new Date(a.month + " " + a.day + " " + a.time);
          let date2 = new Date(b.month + " " + b.day + " " + b.time);
          if (date1 > date2) return 1;
          if (date1 < date2) return -1;
          return 0;
        });
      });
      action.payload.events.sort((a, b) => {
        let date1 = new Date(
          a.event_dates[0].month +
            " " +
            a.event_dates[0].day +
            " " +
            a.event_dates[0].time
        );
        let date2 = new Date(
          b.event_dates[0].month +
            " " +
            b.event_dates[0].day +
            " " +
            b.event_dates[0].time
        );
        if (date1 > date2) return 1;
        if (date1 < date2) return -1;
        return 0;
      });
      state.events = action.payload;
      state.eventsError = "";
    });
    builder.addCase(getEventsThunk.rejected, (state, action) => {
      state.eventsLoading = false;
      state.events = [];
      state.eventsError = action.error.message;
    });
  },
});

export default EventsSlice.reducer;
