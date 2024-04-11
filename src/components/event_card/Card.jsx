import { generateCoverImage } from "../../utils/helpers/generateImage";
import "./Card.scss";

const Card = ({ event }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={generateCoverImage(event.cover_picture)} alt="" />
      </div>
      <div className="card-title">{event.title}</div>
      <ul className="card-date">
        {event.event_dates.length !== 0 ? (
          <>
            <li>{event.event_dates[0].month}</li>
            <li>{event.event_dates[0].day}</li>
            <li>{event.event_dates[0].day_of_week}</li>
            <li>{event.event_dates[0].time}</li>
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default Card;
