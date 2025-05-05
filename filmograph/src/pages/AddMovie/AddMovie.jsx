import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = ({ addMovie }) => {
  const [formData, setFormData] = useState({
    title: '',
    genre: 'Боевик',
    duration: '',
    description: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({
      ...formData,
      duration: parseInt(formData.duration)
    });
    navigate('/');
  };

  return (
    <div className="add-movie">
      <h1>Добавить фильм</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ссылка на изображение</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder=""
          />
        </div>

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
          <label>Загрузить изображение</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e)}
          />
        </div>
        
        <button type="submit">Добавить фильм</button>
      </form>
    </div>
  );
};

export default AddMovie;