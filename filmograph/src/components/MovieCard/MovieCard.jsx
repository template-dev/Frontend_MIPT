import { Link } from 'react-router-dom';
import './MovieCard.css';
import { FaRegComment } from 'react-icons/fa';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { IoMdTime } from "react-icons/io";

const MovieCard = ({ movie, toggleFavorite }) => {
  return (
    <div className="movie-card">
      {movie.image && (
        <div className="movie-image-container">
          <img src={movie.image} alt={movie.title} className="movie-image" />
        </div>
      )}
      
      <div className="movie-content">
        <h3 className="movie-title">{movie.title}</h3>
        
        <div className="movie-meta">
          <span className="movie-genre">{movie.genre}</span>
          
          <span className="movie-duration">
            <IoMdTime className="icon_duration" /> {movie.duration} мин.
          </span>
          
          <button 
            className={`favorite-btn ${movie.isFavorite ? 'active' : ''}`}
            onClick={() => toggleFavorite(movie.id)}
          >
            {movie.isFavorite ? (
              <FaStar className="icon" />
            ) : (
              <FaRegStar className="icon" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;