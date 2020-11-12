import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Link } from "react-router-dom";

import MainContent from "./MainContent";
import "./home.css";
import Paginations from "./Paginations";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Home = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();
  const [chapter, setChapter] = useState("");
  const [shloka, setShloka] = useState("");

  const changeChapter = (event) => {
    setChapter(event.target.value);
  };

  const changeShloka = (event) => {
    setShloka(event.target.value);
  };

  useEffect(() => {
    const fetchData = fetch("/data.json")
      .then((res) => res.json())
      .then((result) => setData(result.verses))
      .catch((e) => console.log(e));
    return () => {
      fetchData();
    };
  }, []);
  return (
    <div className="home">
      <div className="home__title">
        <p>श्रीमद् भगवद्गीता</p>
      </div>
      <div className="home__navigation">
        <div className="home__navigation__script"></div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="home__navigation__chapter">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                Chapter
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={chapter}
                onChange={changeChapter}
              >
                {data.map((verse) => (
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/gita/1/1`}
                  >
                    <MenuItem value={`${verse.chapter_number}`}>
                      {verse.chapter_number}
                    </MenuItem>
                  </Link>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="home__navigation__shloka">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">
                Sloakas
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={shloka}
                onChange={changeShloka}
                default
              >
                {data.map((verse) => (
                  <Link to={`/gita/1/${verse.verse_number}`}>
                    <MenuItem value={`${verse.verse_number}`}>
                      {verse.verse_number}
                    </MenuItem>
                  </Link>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <MainContent data={data} />

      {/* <Paginations count={data.length} /> */}
    </div>
  );
};

export default Home;
