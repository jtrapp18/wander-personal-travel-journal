import { NavLink } from "react-router-dom";

function Logo() {
  return (
      <div id="logo-container">
        <NavLink
          to="/"
          className="nav-link home"
        >
          Home
        </NavLink>
      </div>
  );
};

export default Logo;