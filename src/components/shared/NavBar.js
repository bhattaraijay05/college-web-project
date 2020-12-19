import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";

const NavBar = () => {
  console.log(auth.currentUser);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
      <Link className="navbar-brand" to="/">
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
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav  mr-auto">
          <Link className="nav-link" to="/" style={{ color: "white" }}>
            Home
          </Link>
          <Link className="nav-link" to="/about" style={{ color: "white" }}>
            About Page
          </Link>
          <Link className="nav-link" to="/our-team" style={{ color: "white" }}>
            Our Team
          </Link>
        </div>
        <div class=" my-2 my-lg-0">
          {auth.currentUser ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h4 style={{ color: "#fff", marginRight: 70 }}>
                Hi {auth.currentUser.displayName}
              </h4>
              <Button onClick={() => auth.signOut()} style={{ color: "red" }}>
                Logout
              </Button>
            </div>
          ) : (
            <Link className="nav-link " to="/login" style={{ color: "white" }}>
              Login/Signup
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
