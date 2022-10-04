const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrendingAll: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
  fetchTrendingTv: `/trending/tv/week?api_key=${API_KEY}&language=en-US`
};

export default requests;
