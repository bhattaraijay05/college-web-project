import React from "react";
import ErrorImage from "./../assets/images/errorimage.jpg";

const P404 = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={ErrorImage}
        className="card-img-top"
        style={{ width: "60%", height: "60%" }}
        alt="images"
      />
    </div>
  );
};

export default P404;
