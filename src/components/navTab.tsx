import { NavLink } from "react-router-dom";

const NavTab = () => {
  return (
    <header>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item" role="presentation">
          <NavLink className="nav-link" to="/expense">
            Expense Tracker
          </NavLink>
        </li>
        <li className="nav-item" role="presentation">
          <NavLink className="nav-link" to="/todo">
            To Do List
          </NavLink>
        </li>
        <li className="nav-item" role="presentation">
          <NavLink className="nav-link" to="/hangman">
            Hangman
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavTab;
