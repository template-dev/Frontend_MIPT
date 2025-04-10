import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditMovie.css';

const EditMovie = ({ movies, updateMovie }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    genre: 'Боевик',
    duration: '',
    description: ''
  });

  useEffect(() => {
    const movie = movies.find(m => m.id === parseInt(id));
    if (movie) {
      setFormData({
        title: movie.title,
        genre: movie.genre,
        duration: movie.duration.toString(),
        description: movie.description || ''
      });
    }
  }, [id, movies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMovie({
      id: parseInt(id),
      title: formData.title,
      genre: formData.genre,
      duration: parseInt(formData.duration),
      description: formData.description
    });
    navigate(`/movie/${id}`);
  };

  return (
    <div className="edit-movie">
      <h1>Редактировать фильм</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Название фильма</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Жанр</label>
          <select name="genre" value={formData.genre} onChange={handleChange}>
            <option value="Боевик">Боевик</option>
            <option value="Триллер">Триллер</option>
            <option value="Комедия">Комедия</option>
            <option value="Драма">Драма</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Длительность (мин.)</label>
          <input 
            type="number" 
            name="duration" 
            value={formData.duration} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Описание</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
          />
        </div>
        
        <div className="form-group">
          <label>Загрузить фото</label>
          <input type="file" />
        </div>
        
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default EditMovie;