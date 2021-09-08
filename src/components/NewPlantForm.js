import React, { useState } from "react";

function NewPlantForm({ addPlant }) {

  const [ formData, setFormData ] = useState({
    name: "",
    image: "",
    price: "",
  })

    function handleChange(e){
     setFormData({
       ...formData, [e.target.name]: e.target.value, 
     })
    }

    function handleSubmit(e){
      e.preventDefault()
      console.log(formData)
      // addPlant(formData)
      // setSubmit(!submit)

      fetch('http://localhost:6001/plants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(resp => resp.json())
        .then(addPlant(formData))
    }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder="Plant name" onChange={handleChange} value={formData.name} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.image} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handleChange} value={formData.price} />
        <button type="submit"  >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;