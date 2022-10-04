import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

const imageBaseUrl = 'https://image.tmdb.org/t/p/original/';

export const loadImage = (path) => {
  return imageBaseUrl + path;
};

export default instance;
