import React, { useState, useEffect } from 'react';
import axios, { loadImage } from '../api/axios';
import requests from '../api/requests';
import MoviesList from '../components/MoviesList';
import styles from '../styles/HomePage.module.scss';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await axios.get(requests.fetchTrendingMovies);
      setMovies(response.data.results);
    };

    const fetchTrendingTvShows = async () => {
      const response = await axios.get(requests.fetchTrendingTv);
      setTvShows(response.data.results);
    };

    fetchTrendingMovies();
    fetchTrendingTvShows();
  }, []);

  return (
    <div className={styles.HomePage}>
      <MoviesList
        title="Trending Movies"
        fetchUrl={requests.fetchTrendingMovies}
      />
      <MoviesList
        title="Trending TV Shows"
        fetchUrl={requests.fetchTrendingTv}
      />
    </div>
  );
};

export default HomePage;
