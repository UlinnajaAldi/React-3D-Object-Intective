import React from "react";

const Detail = ({ id, image, name, desc }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
      <em>{id}</em>
    </div>
  );
};

export default Detail;
