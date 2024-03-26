import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Scss
import "./MoviesSlider.scss";
//
import Slider from "react-slick";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { getMoviesThunk } from "../../../redux/slices/MoviesSlice";
//hooks
import { useEffect } from "react";
import { generateImage } from "../../../utils/helpers/generateImage";

const MoviesSlider = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMoviesThunk());
  }, [dispatch]);

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
      {movies.moviesLoading && <div>loading</div>}
      {!movies.moviesLoading && movies.moviesError ? (
        <div>Error:{movies.moviesError}</div>
      ) : null}
      {!movies.moviesLoading && movies.movies.movies.length !== 0 ? (
        <Slider {...settings} className="slider">
          {movies.movies.movies.map((movie) => {
            return (
              <div key={movie.id} className="item">
                <div className="item-img">
                  <img src={generateImage(movie.cover_picture)} alt="" />
                </div>
                <div className="item-info">
                  <h2>{movie.title}</h2>
                  <ul className="item-info-date">
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
              </div>
            );
          })}
        </Slider>
      ) : null}
    </>
  );
};

export default MoviesSlider;
