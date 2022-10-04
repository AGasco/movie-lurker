import React, { useState, useEffect } from 'react';
import axios, { loadImage } from '../api/axios';
import styles from '../styles/MoviesList.module.scss';

const MoviesList = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    };

    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className={styles.MoviesList}>
      <h1>{title}</h1>
      <ul>
        {movies?.map((movie) => (
          <li key={movie?.id} className={styles.MoviesList__Card}>
            <img
              src={loadImage(movie?.poster_path || movie?.backdrop_path)}
              alt={movie?.title}
            />
            <div className={styles.MoviesList__Card__Overlay} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
