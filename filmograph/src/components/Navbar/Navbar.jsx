import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar_item" to="/">Все фильмы</Link>
      <Link className="navbar_item" to="/favorites">Избранное</Link>
      <Link className="navbar_item" to="/add">Добавить фильм</Link>
    </nav>
  );
};

export default Navbar;