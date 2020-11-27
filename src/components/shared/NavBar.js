import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link class="navbar-brand" to="/">
          Super Site
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-link" to="/" style={{ color: "white" }}>
              Home
            </Link>
            <Link class="nav-link" to="/about" style={{ color: "white" }}>
              About Page
            </Link>
            <Link class="nav-link" to="/our-team" style={{ color: "white" }}>
              Our Team
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
