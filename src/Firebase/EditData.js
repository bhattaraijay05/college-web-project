import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "./Firebase";

const EditData = () => {
  const { id } = useParams();
  const { book } = useParams();
  const [chapter, setChapter] = useState();
  const [shloka, setShloka] = useState();
  const [text, setText] = useState("");
  const [meaning, setmeaning] = useState("");

  const addItems = (event) => {
    event.preventDefault();
    db.collection(book)
      .doc(id)
      .update({
        chapter: Number(chapter),
        shloka: Number(shloka),
        text: text,
        meaning: meaning,
      });
    setChapter("");
    setShloka("");
    setText("");
    setmeaning("");
  };

  useEffect(() => {
    db.collection(book)
      .doc(id)
      .get()
      .then((docRef) => {
        setChapter(docRef.data().chapter);
        setShloka(docRef.data().shloka);
        setText(docRef.data().text);
        setmeaning(docRef.data().meaning);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [book, id]);

  const deleteItem = (event) => {
    event.preventDefault();
    db.collection(`srimadhwavijaya`).doc(id).delete();
    setChapter("");
    setShloka("");
    setText("");
    setmeaning("");
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
            placeholder="Chapter Number"
          />
          <input
            type="text"
            value={shloka}
            className="form-control"
            onChange={(event) => setShloka(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="Shloka Number"
          />
          <input
            type="text"
            value={text}
            className="form-control"
            onChange={(event) => setText(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="Shloka"
          />
          <textarea
            type="text"
            value={meaning}
            className="form-control"
            onChange={(event) => setmeaning(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="Meaning"
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: 20,
            }}
          >
            <button
              disabled={(!chapter, !shloka, !text)}
              className="btn btn-primary"
              onClick={addItems}
              type="submit"
            >
              Update
            </button>
            <button
              disabled={(!chapter, !shloka, !text)}
              className="btn btn-danger ml-2"
              onClick={deleteItem}
              type="submit"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditData;
