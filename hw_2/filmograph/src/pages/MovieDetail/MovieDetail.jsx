import './MovieDetail.css';
import { useParams } from 'react-router-dom';

const MovieDetail = ({ movies, toggleFavorite, deleteMovie }) => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <div>Фильм не найден</div>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.genre} • {movie.duration} мин.</p>
      
      {movie.description && (
        <div className="description">
          <h3>Описание</h3>
          <p>{movie.description}</p>
        </div>
      )}
      
      <div className="movie-actions">
        <button onClick={() => toggleFavorite(movie.id)}>
          {movie.isFavorite ? '★ Удалить из избранного' : '☆ Добавить в избранное'}
        </button>
        <button onClick={() => deleteMovie(movie.id)} className="delete-btn">
          Удалить фильм
        </button>
      </div>
    </div>
  );
};

export default MovieDetail;