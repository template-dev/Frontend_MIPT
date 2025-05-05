import { useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import GenreFilter from '../../components/GenreFilter/GenreFilter';
import './Home.css';

const Home = ({ movies, toggleFavorite }) => {
  const allGenres = ['Боевик', 'Триллер', 'Комедия', 'Драма'];
  const [selectedGenres, setSelectedGenres] = useState([...allGenres]);

  const handleGenreChange = (genre) => {
    setSelectedGenres(prev => 
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const filteredMovies = selectedGenres.length === 0
    ? []
    : movies.filter(movie => selectedGenres.includes(movie.genre));

  return (
    <div className="home">
      <h1>Фильмы</h1>
      <GenreFilter 
        genres={allGenres}
        selectedGenres={selectedGenres}
        onGenreChange={handleGenreChange}
      />
      <MovieList movies={filteredMovies} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default Home;