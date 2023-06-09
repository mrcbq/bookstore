import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div id="navbarContainer">
      <h1>Bookstore</h1>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Books</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/categories">Categories</NavLink>
        </li>
      </ul>
    </div>
  );
}
