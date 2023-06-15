import { NavLink } from 'react-router-dom';

import 'material-icons/iconfont/material-icons.css';
import './Navbar.css';

export default function Navbar() {
  return (
    <div id="navbarContainer">
      <div className="nav">
        <span className="Bookstore-CMS">Bookstore CMS</span>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/"
            >
              BOOKS
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/categories"
            >
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </div>
      <button className="icon-button" type="button">
        <span className="material-icons primary-color">person</span>
      </button>
    </div>
  );
}
