import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <div id="navbarContainer">
      <h1>Math Magicians</h1>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Calculator</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/quotes">Quotes</NavLink>
        </li>
      </ul>
    </div>
  );
}
