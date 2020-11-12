import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Paginations({ count }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={count} color="primary">
        <Link to={`/gita/1/`}>12</Link>
      </Pagination>
    </div>
  );
}
