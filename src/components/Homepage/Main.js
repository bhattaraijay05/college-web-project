import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      This is the Main Page
      <Link to={`/gita/1/1`}>
        <Button variant="contained" color="primary">
          Gita
        </Button>
      </Link>
    </div>
  );
};

export default Main;
