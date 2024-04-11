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

export const getAllEvents = async () => {
  return await api.get(`/events`);
};

export const getEventById = async (id) => {
  return await api.get(`/events/${id}`);
};

//POST

export const createEvent = async (data) => {
  return await apiWithImgs.post(`/events`, data);
};
