import { generateImage } from "../../utils/helpers/generateImage";
import "./Card.scss";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={generateImage(movie.cover_picture)} alt="" />
      </div>
      <div className="card-title">{movie.title}</div>
      <ul className="card-date">
        {movie.movie_dates.length !== 0 ? (
          <>
            <li>{movie.movie_dates[0].month}</li>
            <li>{movie.movie_dates[0].day}</li>
            <li>{movie.movie_dates[0].day_of_week}</li>
            <li>{movie.movie_dates[0].time}</li>
          </>
        ) : null}
      </ul>
    </div>
  );
};

export default Card;
