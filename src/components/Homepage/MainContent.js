import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Button from "@material-ui/core/Button";
const MainContent = ({ data }) => {
  const { shloka } = useParams();
  const { chapters } = useParams();
  const [showTranslate, setShowTranslate] = useState("none");
  const [translate, setTranslate] = useState("Meaning");
  const changeText = () => {
    if (showTranslate === "none") {
      setShowTranslate("flex");
      setTranslate("Done");
    } else {
      setShowTranslate("none");
      setTranslate("Meaning");
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
            {translate}
          </Button>
        </div>
      </div>

      <div
        className="home__content__box"
        style={{
          display: `${showTranslate}`,
        }}
      >
        <div className="content__content">
          <p>
            {data.map((card) => {
              if (
                card.shloka === parseInt(shloka) &&
                card.chapter === parseInt(chapters)
              ) {
                return <p>{card.translate}</p>;
              }
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
