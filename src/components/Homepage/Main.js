import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Main = () => {
  const books = [
    {
      name: "srimadhwavijaya",
      title: "Sri Sumadhva Vijaya (The story of the victory of Madhva)",
    },
  ];
  return (
    <div
      style={{
        padding: 30,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {books.map((book) => (
        <div className="card" style={{ width: "18rem", marginRight: 30 }}>
          <img
            className="card-img-top"
            src="/book.jpg"
            alt="Srimadhwavijaya"
            style={{ width: "100%", height: "200px" }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ textTransform: "capitalize" }}>
              {book.name}
            </h5>
            <p className="card-text">{book.title}</p>

            <Link to={`/${book.name}/1/1`}>
              <Button variant="contained" color="primary">
                Srimadhwavijaya
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
