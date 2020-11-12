import React, { useState, useEffect, createContext } from "react";
import { firebase, db } from "../Firebase/Firebase";
import Items from "../Home/Items";
const itemss = createContext([]);

const AddToDatabase = ({ itemss }) => {
  const [items, setItems] = useState([]);
  const [pId, setPId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [productType, setProductType] = useState("");
  const [rating, setRating] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    db.collection("items")
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        setItems(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            pId: doc.data().pId,
            title: doc.data().title,
            price: doc.data().price,
            productType: doc.data().productType,
            color: doc.data().color,
            rating: doc.data().rating,
          }))
        );
      });
  }, []);
  console.log(items);
  const addItems = (event) => {
    //this will happen after clicking the button
    event.preventDefault();
    db.collection("items").add({
      pId: Number(pId),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      title: title,
      price: Number(price),
      productType: productType,
      rating: Number(rating),
      color: color,
    });
    setPId("");
    setTitle("");
    setPrice("");
    setColor("");
    setProductType("");
    setRating("");
  };

  return (
    <>
      <div className="container-fluid mt-5 pt-5 ">
        <form>
          <input
            type="text"
            value={pId}
            pId="pId"
            className="form-control"
            onChange={(event) => setPId(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="ID Number"
          />
          <input
            type="text"
            value={title}
            pId="pId"
            className="form-control"
            onChange={(event) => setTitle(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="Title"
          />
          <input
            type="text"
            value={price}
            pId="pId"
            className="form-control"
            onChange={(event) => setPrice(event.target.value)}
            style={{ textAlign: " center", fontSize: 20 }}
            placeholder="Price"
          />

          <span style={{ display: "flex" }}>
            <h3 style={{ width: "70%", backgroundColor: "grey" }}>
              Select The Product Type
            </h3>
            <select
              class="browser-default custom-select"
              onChange={(event) => setProductType(event.target.value)}
            >
              <p>Product Type</p>
              <option selected>Product Type</option>
              <option value="bestseller">bestseller</option>
              <option value="new">new</option>
              <option value="toprated">toprated</option>
            </select>
          </span>

          <span style={{ display: "flex" }}>
            <h3 style={{ width: "70%", backgroundColor: "grey" }}>
              Select Color of item
            </h3>
            <select
              class="browser-default custom-select"
              onChange={(event) => setColor(event.target.value)}
            >
              <p>Color</p>
              <option selected>Color of Item</option>
              <option value="white">white</option>
              <option value="red">red</option>
              <option value="black">black</option>
            </select>
          </span>

          <span style={{ display: "flex" }}>
            <h3 style={{ width: "70%", backgroundColor: "grey" }}>
              How much rating for the item
            </h3>
            <select
              class="browser-default custom-select"
              onChange={(event) => setRating(event.target.value)}
            >
              <p>Rating</p>
              <option selected>Rating of Item</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </span>

          <button
            disabled={(!pId, !title, !price)}
            className="btn btn-primary"
            onClick={addItems}
            type="submit"
          >
            POST
          </button>
        </form>
      </div>

      <div>
        {items.map((item) => (
          <Items
            id={item.pId}
            title={item.title}
            rating={item.rating}
            product_type={item.productType}
            color={item.color}
            price={item.price}
            button_color="red"
          />
        ))}
      </div>
    </>
  );
};
export { itemss };

export default AddToDatabase;
