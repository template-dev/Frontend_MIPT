import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import AddMovie from './pages/AddMovie/AddMovie';
import EditMovie from './pages/EditMovie/EditMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Матрица', genre: 'Боевик', duration: 136, description: 'Фильм про симуляции и красную пилюлю', isFavorite: true, image: './assets/matrix.jpg' },
    { id: 2, title: 'Безумный Макс', genre: 'Боевик', duration: 88, isFavorite: false, image: './assets/max.jpg' },
    { id: 3, title: 'Джентльмены', genre: 'Драма', duration: 113, isFavorite: false, image: './assets/gentlemens.jpg' },
    { id: 4, title: 'Отступники', genre: 'Триллер', duration: 151, isFavorite: false, image: './assets/apostates.jpg' },
    { id: 5, title: 'Гладиатор', genre: 'Боевик', duration: 155, isFavorite: false, image: './assets/gladiator.jpg' },
    { id: 6, title: 'Однажды в Голливуде', genre: 'Драма', duration: 181, isFavorite: true, image: './assets/hollywood.jpg' },
    { id: 7, title: 'Предложение', genre: 'Комедия', duration: 108, isFavorite: false, image: './assets/offer.jpg' },
    { id: 8, title: 'Малышка на миллион', genre: 'Драма', duration: 132, isFavorite: true, image: './assets/million.jpg' },
    { id: 9, title: 'Ларри Краун', genre: 'Комедия', duration: 98, isFavorite: false, image: './assets/larry.jpg' },
  ]);

  const toggleFavorite = (id) => {
    setMovies(movies.map(movie => 
      movie.id === id ? {...movie, isFavorite: !movie.isFavorite} : movie
    ));
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1, isFavorite: false }]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies(movies.map(movie => 
      movie.id === updatedMovie.id ? updatedMovie : movie
    ));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <Home 
              movies={movies} 
              toggleFavorite={toggleFavorite} 
            />
          } />
          <Route path="/favorites" element={
            <Favorites 
              movies={movies.filter(m => m.isFavorite)} 
              toggleFavorite={toggleFavorite} 
              deleteMovie={deleteMovie} 
            />
          } />
          <Route path="/movie/:id" element={
            <MovieDetail 
              movies={movies} 
              toggleFavorite={toggleFavorite} 
              deleteMovie={deleteMovie} 
            />
          } />
          <Route path="/add" element={
            <AddMovie addMovie={addMovie} />
          } />
          <Route path="/edit/:id" element={
            <EditMovie 
              movies={movies} 
              updateMovie={updateMovie} 
            />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;