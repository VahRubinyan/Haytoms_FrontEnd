import axios from "axios";

export const APIUrl = process.env.REACT_APP_API_URL;
const token = "";

const api = axios.create({
  baseURL: APIUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

//GET

export const getAllMovies = async () => {
  return await api.get(`/movies`);
};

export const getMovieById = async (id) => {
  return await api.get(`/movies/${id}`);
};

//POST

export const createMovie = async (data) => {
  return await api.post(`/movies`, data, {
    withCredentials: true,
  });
};
