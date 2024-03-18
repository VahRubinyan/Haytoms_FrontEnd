import axios from "axios";

export const APIUrl = process.env.REACT_APP_API_URL;
const token = "";

const api = axios.create({
  baseURL: APIUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

const apiWithImgs = axios.create({
  baseURL: APIUrl,
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
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
  return await apiWithImgs.post(`/movies`, data);
};
