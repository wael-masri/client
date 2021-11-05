import React, { useState } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo2.png";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      id="navitems"
      className={
        navbar
          ? "navbar navbar-expand-lg navbar_custom active_navbar_custom "
          : "navbar navbar-expand-lg navbar_custom"
      }
    >
      <div className="container-fluid ">
        <img src={logo} style={{ width: "66px" }} alt="logo nav" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ul_costom">
            <li className="nav-item li_cutom">
              <Link className="nav-link custom_link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item li_cutom">
              <Link className="nav-link custom_link" to="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
