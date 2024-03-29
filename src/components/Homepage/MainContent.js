import React from "react";
import { Link, useParams } from "react-router-dom";
import Sanscript from "sanscript";
import "./home.css";
import { auth } from "../../Firebase/Firebase";

const MainContent = ({ data, Language, book }) => {
  const { shloka } = useParams();
  const { chapters } = useParams();
  return (
    <div className="mainContent">
      <div style={{ flex: 0.5 }}>
        <div className="content__content">
          <div className="content__title">
            <h2>मूल श्लोकः</h2>
          </div>
          <p>
            {data.map((card) => {
              if (
                card.shloka === parseInt(shloka) &&
                card.chapter === parseInt(chapters)
              ) {
                return Sanscript.t(`${card.text}`, "devanagari", `${Language}`);
              }
            })}
          </p>
        </div>
      </div>

      <div style={{ flex: 0.5 }}>
        <div className="content__content">
          <div className="content__title">
            <h2>Meaning</h2>
          </div>
          <p>
            {data.map((card) => {
              if (
                card.shloka === parseInt(shloka) &&
                card.chapter === parseInt(chapters)
              ) {
                return (
                  <>
                    <p>{card.meaning}</p>
                    {auth.currentUser ? (
                      <Link to={`/edit/${book}/${card.id}`}>
                        <button className="btn btn-primary" type="submit">
                          Edit
                        </button>
                      </Link>
                    ) : (
                      <></>
                    )}
                  </>
                );
              }
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
