import React, { useState, useEffect } from 'react';
import axios, { loadImage } from '../api/axios';
import requests from '../api/requests';
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
      <div className={styles.HomePage__Section}>
        <h1>Trending Movies</h1>
        <ul className={styles.HomePage__List}>
          {movies.map((movie) => (
            <li key={movie.id} className={styles.HomePage__Card}>
              <img
                src={loadImage(movie.poster_path || movie.backdrop_path)}
                alt={movie.title}
              />
              <div className={styles.HomePage__Card__Overlay} />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.HomePage__Section}>
        <h1>Trending TV Shows</h1>
        <ul className={styles.HomePage__List}>
          {tvShows.map((tvShow) => (
            <li key={tvShow.id} className={styles.HomePage__Card}>
              <img
                src={loadImage(tvShow.poster_path || tvShow.backdrop_path)}
                alt={tvShow.title}
              />
              <div className={styles.HomePage__Card__Overlay} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
