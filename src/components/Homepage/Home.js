import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { useParams } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Link } from "react-router-dom";

import MainContent from "./MainContent";
import "./home.css";
import { db } from "../../Firebase/Firebase";
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
  const { book } = useParams();

  const classes = useStyles();
  const [chapter, setChapter] = useState(1);
  const [shloka, setShloka] = useState(1);

  const [Language, setLanguage] = useState("devanagari");
  const changeChapter = (event) => {
    setChapter(event.target.value);
  };

  const changeShloka = (event) => {
    setShloka(event.target.value);
  };

  const changeLanguage = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    db.collection(book)
      .orderBy("shloka", "asc")
      .onSnapshot((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            chapter: doc.data().chapter,
            shloka: doc.data().shloka,
            text: doc.data().text,
            meaning: doc.data().meaning,
          }))
        );
      });
  }, [book]);

  const totalChapter = [];
  for (let i = 1; i <= 16; i++) {
    totalChapter.push(i);
  }

  const languages = [
    "malayalam",
    "kannada",
    "telugu",
    "bengali",
    "devanagari",
    "oriya",
    "tamil",
    "gurmukhi",
    "gujarati",
  ];

  return (
    <div className="home">
      <div className="home__title">
        <p className="home__title__text">{book}</p>
      </div>
      <div className="home__navigation">
        <div className="home__navigation__script"></div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div className="home__navigation__chapter">
            <FormControl className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-helper-label"
                style={{ color: "blue" }}
              >
                Chapter
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={chapter}
                onChange={changeChapter}
              >
                {totalChapter.map((chap) => (
                  <MenuItem
                    value={chap}
                    component={Link}
                    to={`/${book}/${chap}/1`}
                  >
                    {chap}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="home__navigation__shloka">
            <FormControl className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-helper-label"
                style={{ color: "blue" }}
              >
                Sloakas
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={shloka}
                onChange={changeShloka}
                default
              >
                {data.map((verse) => {
                  if (verse.chapter === chapter) {
                    return (
                      <MenuItem
                        value={verse.shloka}
                        component={Link}
                        to={`/${book}/${chapter}/${verse.shloka}`}
                      >
                        {verse.shloka}
                      </MenuItem>
                    );
                  }
                })}
              </Select>
            </FormControl>
          </div>
          <div className="home__navigation__shloka">
            <FormControl className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-helper-label"
                style={{ color: "blue" }}
              >
                Language
              </InputLabel>

              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={Language}
                onChange={changeLanguage}
              >
                {languages.map((lang) => (
                  <MenuItem value={lang}>{lang}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <MainContent key={data.id} data={data} Language={Language} book={book} />
    </div>
  );
};

export default Home;
