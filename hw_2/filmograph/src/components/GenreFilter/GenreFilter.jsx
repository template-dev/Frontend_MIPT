import { FaCheckCircle } from "react-icons/fa";
import './GenreFilter.css';

const genreIcons = {
  'Боевик': <FaCheckCircle />,
  'Триллер': <FaCheckCircle />,
  'Комедия': <FaCheckCircle />,
  'Драма': <FaCheckCircle />
};

const GenreFilter = ({ genres, selectedGenres, onGenreChange }) => {
  return (
    <div className="genre-filter">
      {genres.map(genre => (
        <div 
          key={genre}
          className={`genre-item ${selectedGenres.includes(genre) ? 'selected' : ''}`}
          onClick={() => onGenreChange(genre)}
        >
          <span className="genre-icon">{genreIcons[genre]}</span>
          {genre}
        </div>
      ))}
    </div>
  );
};

export default GenreFilter;