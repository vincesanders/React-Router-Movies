import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      // <span className="saved-movie">{movie.title}</span>
      <NavLink className="saved-movie" to={`/movies/${movie.id}`}>{movie.title}</NavLink>
    ))}
    <Link to='/' className="home-button">Home</Link>
  </div>
);

export default SavedList;
