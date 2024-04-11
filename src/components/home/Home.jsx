//Scss
import "./Home.scss";

import { createEvent } from "../../api/api";
import { useCallback, useEffect, useState } from "react";
import EventsSlider from "./events-slider/EventsSlider";
import TodayEvents from "./today-events/TodayEvents";
import { getEventsThunk } from "../../redux/slices/EventsSlice";
import { useDispatch, useSelector } from "react-redux";
import { months } from "../../config";

const Home = () => {
  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(new Date());

  const events = useSelector((state) => state.events.events.events);
  const loading = useSelector((state) => state.events.eventsLoading);
  const error = useSelector((state) => state.events.eventsError);

  useEffect(() => {
    const intervalid = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(intervalid);
  }, []);

  useEffect(() => {
    async function getDataRequest() {
      await dispatch(getEventsThunk());
    }
    getDataRequest();
  }, [dispatch]);

  const onFilterEventsByToday = useCallback(
    (events) => {
      return events.filter((event) => {
        const time = event.event_dates[0].time.split(":");
        let status = false;
        const monthName = months[currentDate.getMonth()];
        if (
          currentDate.getHours() === +time[0] &&
          currentDate.getMinutes() < +time[1]
        ) {
          status = true;
        } else if (currentDate.getHours() < +time[0]) {
          status = true;
        }
        return (
          monthName === event.event_dates[0].month &&
          currentDate.getDate() === event.event_dates[0].day &&
          status
        );
      });
    },
    [currentDate]
  );

  return (
    <div className="home">
      {events && events.length !== 0 && (
        <>
          <EventsSlider events={events} error={error} loading={loading} />
          <TodayEvents
            data={onFilterEventsByToday(events)}
            loading={loading}
            error={error}
          />
        </>
      )}
    </div>
  );
};

export default Home;
