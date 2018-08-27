import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light blue darken-3 ">
    {/* <Link className="navbar-brand" to="/">
     Home
    </Link> */}
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
              window.location.pathname === "/Home"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/UserPortfolio"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/UserPortfolio" className="nav-link">
            User Portfolio
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/Registration"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/registration" className="nav-link">
           Login
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;