//Scss
import "./Home.scss";

import { createMovie } from "../../api/api";
import { useEffect, useState } from "react";
import MoviesSlider from "./movies-slider/MoviesSlider";

const Home = () => {
  const [newMovieData, setNewMovieData] = useState({
    title: "",
    cover_picture: null,
    description: "",
    trailer: "",
    day: 1,
    month: "",
    day_of_week: "",
    duration: 0,
    time: "",
    cinema: "",
    hall: "",
    price: 0,
    age_limit: 0,
  });

  const onChangeMovieData = (e) => {
    setNewMovieData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setNewMovieData((prev) => {
      return {
        ...prev,
        [event.target.name]: selectedImage,
      };
    });
  };

  const onSendMovieData = async (e) => {
    e.preventDefault();
    try {
      await createMovie(newMovieData);
      console.log("succsess");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="home">
      <MoviesSlider />

      <label htmlFor="title">title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={newMovieData.title}
        onChange={onChangeMovieData}
      ></input>
      <label htmlFor="movieImg">Select image</label>
      <input
        type="file"
        id="movieImg"
        name="cover_picture"
        onChange={handleImageUpload}
        required={{ value: true, message: "required" }}
      ></input>

      <label htmlFor="description">description</label>
      <input
        type="text"
        id="description"
        name="description"
        value={newMovieData.description}
        onChange={onChangeMovieData}
        required={{ value: true, message: "required" }}
      ></input>

      <label htmlFor="trailer">trailer</label>
      <input
        type="text"
        id="trailer"
        name="trailer"
        value={newMovieData.trailer}
        onChange={onChangeMovieData}
        required={{ value: true, message: "required" }}
      ></input>

      <label htmlFor="day">Day</label>
      <input
        type="number"
        id="day"
        name="day"
        value={newMovieData.day}
        onChange={onChangeMovieData}
        required={{ value: true, message: "required" }}
      ></input>

      <label htmlFor="month">month</label>
      <input
        type="text"
        id="month"
        name="month"
        value={newMovieData.month}
        onChange={onChangeMovieData}
        required={{ value: true, message: "required" }}
      ></input>

      <label htmlFor="week">week</label>
      <input
        type="text"
        id="week"
        name="day_of_week"
        value={newMovieData.day_of_week}
        onChange={onChangeMovieData}
        required={{ value: true, message: "required" }}
      ></input>

      <label htmlFor="time">Time</label>
      <input
        type="text"
        id="time"
        name="time"
        value={newMovieData.time}
        onChange={onChangeMovieData}
        required={{ value: true, message: "required" }}
      ></input>

      <label htmlFor="duration">duration</label>
      <input
        type="number"
        id="duration"
        name="duration"
        value={newMovieData.duration}
        onChange={onChangeMovieData}
        required={{ value: true, message: "required" }}
      ></input>

      <label htmlFor="cinema">Cinema</label>
      <input
        type="text"
        id="cinema"
        name="cinema"
        value={newMovieData.cinema}
        onChange={onChangeMovieData}
        required={{ value: true, message: "required" }}
      ></input>

      <label htmlFor="hall">Hall</label>
      <input
        type="text"
        id="hall"
        name="hall"
        value={newMovieData.hall}
        onChange={onChangeMovieData}
        required={{ value: true, message: "required" }}
      ></input>

      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        value={newMovieData.price}
        onChange={onChangeMovieData}
        required={{ value: true, message: "required" }}
      ></input>

      <label htmlFor="ageLimit">Age Limit</label>
      <input
        type="number"
        id="ageLimit"
        name="age_limit"
        value={newMovieData.age_limit}
        onChange={onChangeMovieData}
        required={{ value: true, message: "required" }}
      ></input>

      <div onClick={onSendMovieData}>Submit</div>
      <div
        onClick={() => {
          console.log(newMovieData);
        }}
      >
        click
      </div>
    </div>
  );
};

export default Home;
