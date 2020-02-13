import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  const { id, title, director, metascore, stars } = props.movie;
  return (
    <Link to={`/movies/${id}`} >
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default MovieCard;
