import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/counter">
              counter
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/random">
              Random Numbers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts">
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
