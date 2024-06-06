import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
        <h2>{movie.title}</h2>
      </Link>
    </div>
  );
};

export default MovieCard;
