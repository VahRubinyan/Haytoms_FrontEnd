export const generateCoverImage = (url) => {
  return `http://127.0.0.1:8000/storage/EventCoverPictures/${url}`;
};

export const generateImage = (url) => {
  return `http://127.0.0.1:8000/storage/EventPictures/${url}`;
};
