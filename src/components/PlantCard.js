import React, { useState } from "react";

function PlantCard({ name, image, price }) {
const [ inStock, setInStock ] = useState(true)

const handleInStock = () => {
  setInStock(!inStock)
}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => handleInStock()}>In Stock</button>
      ) : (
        <button onClick={() => handleInStock()}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
