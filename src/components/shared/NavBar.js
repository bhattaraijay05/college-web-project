import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logUserOut = () => {
    setOpen(false);
    auth.signOut();
  };
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

          {auth.currentUser ? (
            <Link className="nav-link" to="/add" style={{ color: "white" }}>
              Add Data
            </Link>
          ) : (
            <></>
          )}
          {/* <Link className="nav-link" to="/our-team" style={{ color: "white" }}>
            Our Team
          </Link> */}
        </div>
        <div class=" my-2 my-lg-0">
          {auth.currentUser?.displayName ? (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <h4 style={{ color: "#fff", marginRight: 50, marginTop: "auto" }}>
                Hi {auth.currentUser.displayName}
              </h4>
              <div>
                <Button
                  color="primary"
                  style={{ color: "red", fontWeight: "bold", fontSize: 18 }}
                  onClick={handleClickOpen}
                >
                  Logout
                </Button>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-slide-title"
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle id="alert-dialog-slide-title">
                    {"Do you really want to log out?"}
                  </DialogTitle>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      No
                    </Button>
                    <a href="/" style={{ textDecoration: "none" }}>
                      <Button onClick={logUserOut} color="primary">
                        Yes
                      </Button>
                    </a>
                  </DialogActions>
                </Dialog>
              </div>
            </div>
          ) : (
            <>
              <Link
                className="nav-link "
                to="/login"
                style={{ color: "white" }}
              >
                Login/Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
