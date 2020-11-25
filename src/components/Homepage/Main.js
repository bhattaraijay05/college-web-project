import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Main = () => {
  const book = "srimadhwavijaya";
  return (
    <div style={{ padding: 30 }}>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="/book.jpg"
          alt="Srimadhwavijaya"
          style={{ width: "100%", height: "200px" }}
        />
        <div className="card-body">
          <h5 className="card-title">Srimadhwavijaya</h5>
          <p className="card-text">
            Sri Sumadhva Vijaya ("The story of the victory of Madhva")
          </p>

          <Link to={`/${book}/1/1`}>
            <Button variant="contained" color="primary">
              Srimadhwavijaya
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
