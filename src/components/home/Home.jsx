//Scss
import "./Home.scss";

import { createMovie } from "../../api/api";
import { useState } from "react";

const Home = () => {
  const [newMovieData, setNewMovieData] = useState({
    cover_picture: "",
    description: "",
    trailer: "",
    day: 1,
    month: "",
    day_of_week: "",
    time: 0,
    cinema: "",
    hall: "",
    price: 0,
    age_limit: 0,
  });

  const sendMovieData = async (e) => {
    try {
      await createMovie(newMovieData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="home">
      <form>
        <label htmlFor="movieImg">Select image</label>
        <input
          type="file"
          id="movieImg"
          name="movieImg"
          value={newMovieData.cover_picture}
          onChange={(e) =>
            setNewMovieData((prevState) => ({
              ...prevState,
              cover_picture: e.target.value,
            }))
          }
        ></input>

        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={newMovieData.description}
          onChange={(e) =>
            setNewMovieData((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
        ></input>

        <label htmlFor="trailer">trailer</label>
        <input
          type="text"
          id="trailer"
          name="trailer"
          value={newMovieData.trailer}
          onChange={(e) =>
            setNewMovieData((prevState) => ({
              ...prevState,
              trailer: e.target.value,
            }))
          }
        ></input>

        <label htmlFor="day">Day</label>
        <input
          type="number"
          id="day"
          name="day"
          value={newMovieData.day}
          onChange={(e) =>
            setNewMovieData((prevState) => ({
              ...prevState,
              day: e.target.value,
            }))
          }
        ></input>

        <label htmlFor="month">month</label>
        <input
          type="text"
          id="month"
          name="month"
          value={newMovieData.month}
          onChange={(e) =>
            setNewMovieData((prevState) => ({
              ...prevState,
              month: e.target.value,
            }))
          }
        ></input>

        <label htmlFor="week">week</label>
        <input
          type="text"
          id="week"
          name="week"
          value={newMovieData.day_of_week}
          onChange={(e) =>
            setNewMovieData((prevState) => ({
              ...prevState,
              day_of_week: e.target.value,
            }))
          }
        ></input>

        <label htmlFor="time">Time</label>
        <input
          type="number"
          id="time"
          name="time"
          value={newMovieData.time}
          onChange={(e) =>
            setNewMovieData((prevState) => ({
              ...prevState,
              time: e.target.value,
            }))
          }
        ></input>

        <label htmlFor="cinema">Cinema</label>
        <input
          type="text"
          id="cinema"
          name="cinema"
          value={newMovieData.cinema}
          onChange={(e) =>
            setNewMovieData((prevState) => ({
              ...prevState,
              cinema: e.target.value,
            }))
          }
        ></input>

        <label htmlFor="hall">Hall</label>
        <input
          type="text"
          id="hall"
          name="hall"
          value={newMovieData.hall}
          onChange={(e) =>
            setNewMovieData((prevState) => ({
              ...prevState,
              hall: e.target.value,
            }))
          }
        ></input>

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          value={newMovieData.price}
          onChange={(e) =>
            setNewMovieData((prevState) => ({
              ...prevState,
              price: e.target.value,
            }))
          }
        ></input>

        <label htmlFor="ageLimit">Age Limit</label>
        <input
          type="number"
          id="ageLimit"
          name="ageLimit"
          value={newMovieData.age_limit}
          onChange={(e) =>
            setNewMovieData((prevState) => ({
              ...prevState,
              age_limit: e.target.value,
            }))
          }
        ></input>

        <div
          onClick={() => {
            sendMovieData();
          }}
        >
          Submit
        </div>
        <div onClick={() => console.log(newMovieData)}>click</div>
      </form>
    </div>
  );
};

export default Home;
