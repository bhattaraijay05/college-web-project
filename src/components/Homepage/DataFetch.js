import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/Firebase";

const DataFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    db.collection("books").onSnapshot((snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          chapter: doc.data().chapter,
          shloka: doc.data().shloka,
          text: doc.data().text,
          translate: doc.data().translate,
        }))
      );
    });
  }, []);
  {
    console.log(data);
  }
  return (
    <div>
      <p>Hello World {data.chapter} </p>
    </div>
  );
};

export default DataFetch;
