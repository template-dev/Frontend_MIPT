import { useState } from 'react';

const Favorites = ({ movies, toggleFavorite, deleteMovie }) => {
  return (
    <div className="favorites">
      <h1>Избранное</h1>
      <ul className="favorites-list">
        {movies.map(movie => (
          <li key={movie.id}>
            <div className="favorite-item">
              <span>{movie.title}</span>
              <span>{movie.duration} мин.</span>
              <div className="favorite-actions">
                <button onClick={() => toggleFavorite(movie.id)}>Удалить из избранного</button>
                <button onClick={() => deleteMovie(movie.id)}>Удалить фильм</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;