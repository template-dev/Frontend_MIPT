import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

const MovieList = ({ movies, toggleFavorite }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} toggleFavorite={toggleFavorite} />
      ))}
    </div>
  );
};

export default MovieList;