import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Button from "@material-ui/core/Button";
const MainContent = ({ data }) => {
  const { shloka } = useParams();
  const { chapters } = useParams();
  const [showmeaning, setShowmeaning] = useState("none");
  const [meaning, setmeaning] = useState("Meaning");
  const changeText = () => {
    if (showmeaning === "none") {
      setShowmeaning("flex");
      setmeaning("Done");
    } else {
      setShowmeaning("none");
      setmeaning("Meaning");
    }
  };
  return (
    <div>
      <div className="home__content__box">
        <div className="content__title">
          <h2>मूल श्लोकः</h2>
        </div>
        <div className="content__content">
          <p>
            {data.map((card) => {
              if (
                card.shloka === parseInt(shloka) &&
                card.chapter === parseInt(chapters)
              ) {
                return <p>{card.text}</p>;
              }
            })}
          </p>
          <Button variant="contained" color="primary" onClick={changeText}>
            {meaning}
          </Button>
        </div>
      </div>

      <div
        className="home__content__box"
        style={{
          display: `${showmeaning}`,
        }}
      >
        <div className="content__content">
          <p>
            {data.map((card) => {
              if (
                card.shloka === parseInt(shloka) &&
                card.chapter === parseInt(chapters)
              ) {
                return <p>{card.meaning}</p>;
              }
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
