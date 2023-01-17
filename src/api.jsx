import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASEURL;
const apiKey = process.env.REACT_APP_APIKEY;

export const getMovieList = async () => {
  const movies = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movies.data.results;
};

export const detailMovie = async (id) => {
  const { data } = await axios.get(`${baseUrl}/movie/${id}?api_key=${apiKey}`);
  return data;
};

export const getSearchMovies = async (q) => {
  const { data } = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&&query=${q}`);
  return data;
};
