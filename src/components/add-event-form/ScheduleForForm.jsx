import { CiCircleRemove } from "react-icons/ci";

const ScheduleForForm = ({ data, index, setEventData, eventData }) => {
  const onRemoveSchedule = (index) => {
    let arr = eventData.event_dates;
    arr.splice(index, 1);
    setEventData((prev) => {
      return {
        ...prev,
        event_dates: arr,
      };
    });
  };
  return (
    <div className="add_event_form-schedules-schedule">
      <div className="add_event_form-schedules-schedule-item">
        <div>{data.cinema}</div>
        <div>{data.hall}</div>
        <div>{data.price}</div>
      </div>

      <div className="add_event_form-schedules-schedule-item">
        <div>{data.month}</div>
        <div>{data.day}</div>
        <div>{data.day_of_week}</div>
        <div>{data.time}</div>
      </div>

      <div className="add_event_form-schedules-schedule-item">
        {data.duration !== "" ? (
          <div>{data.duration}</div>
        ) : (
          <div
            style={{
              color: "red",
              opacity: 0.5,
            }}
          >
            No duration
          </div>
        )}
        {data.age_limit !== "" ? (
          <div>{data.age_limit}</div>
        ) : (
          <div
            style={{
              color: "red",
              opacity: 0.5,
            }}
          >
            No Age Limit
          </div>
        )}
      </div>

      <div
        className="add_event_form-schedules-schedule-remove"
        onClick={() => onRemoveSchedule(index)}
      >
        <CiCircleRemove />
      </div>
    </div>
  );
};

export default ScheduleForForm;
