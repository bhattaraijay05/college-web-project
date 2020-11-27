import React, { useState } from "react";
import { db } from "./Firebase";

const AddToFirestore = () => {
  const [chapter, setChapter] = useState();
  const [shloka, setShloka] = useState();
  const [text, setText] = useState("");
  const [translate, setTranslate] = useState("");
  const addItems = (event) => {
    //this will happen after clicking the button
    event.preventDefault();
    db.collection("books").add({
      chapter: Number(chapter),
      shloka: Number(shloka),
      text: text,
      translate: translate,
    });
    setChapter("");
    setShloka("");
    setText("");
    setTranslate("");
  };

  return (
    <div>
      <div className="container-fluid mt-5 pt-5 ">
        <form>
          <input
            type="text"
            value={chapter}
            className="form-control"
            onChange={(event) => setChapter(event.target.value)}
            style={{ textAlign: "center", fontSize: 20 }}
            placeholder="Chapter No:"
          />
          <input
            type="text"
            value={shloka}
            className="form-control"
            onChange={(event) => setShloka(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="Shloka No:"
          />
          <input
            type="text"
            value={text}
            className="form-control"
            onChange={(event) => setText(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="Shloka"
          />
          <input
            type="text"
            value={translate}
            className="form-control"
            onChange={(event) => setTranslate(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="Meaning"
          />
          <button
            disabled={(!chapter, !shloka, !text)}
            className="btn btn-primary"
            onClick={addItems}
            type="submit"
          >
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddToFirestore;
