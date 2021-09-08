import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  console.log(plants)
  
  const plantCard = plants.map((plant) => {
    return <PlantCard name={plant.name} image={plant.image} price={plant.price} />
  })
  
  return (
    <ul className="cards">{plantCard}</ul>
  );
}

export default PlantList;
