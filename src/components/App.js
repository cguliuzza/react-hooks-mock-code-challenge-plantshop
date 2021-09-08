import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [ plants, setPlants ] = useState([])


useEffect(() => {
  fetch('http://localhost:6001/plants')
  .then(resp => resp.json())
  .then(setPlants)
}, [])
  
function addPlant(formData){
  setPlants([...plants, formData])
}

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addPlant={(formData)=> addPlant(formData)} />
    </div>
  );
}

export default App;