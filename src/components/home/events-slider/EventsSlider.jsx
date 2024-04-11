import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Scss
import "./EventsSlider.scss";
//
import Slider from "react-slick";
import { generateCoverImage } from "../../../utils/helpers/generateImage";

const EventsSlider = ({ events, loading, error }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
  };

  return (
    <>
      {loading && <div>loading</div>}
      {!loading && error ? <div>Error:{error}</div> : null}
      <Slider {...settings} className="slider">
        {events.map((event) => {
          return (
            <div key={event.id} className="item">
              <div className="item-img">
                <img src={generateCoverImage(event.cover_picture)} alt="" />
              </div>
              <div className="item-info">
                <h2>{event.title}</h2>
                <ul className="item-info-date">
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
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default EventsSlider;
