import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const AddRestaurant = () => {
    const [restaurant, setRestaurants] = useState({
        title: "",
        type: "",
        img: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurants({...restaurant, [name]: value });
    };
const handleSubmit = () => {
    try {
        const response = fetch ("http://localhost:3000/restaurants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(restaurant),
        });

        if (response.ok) {
            alert("Restaurant added successfully!");
            setRestaurants({
                title: "",
                type: "",
                img: "",
            });
        } 
    } catch (error) {
        console.log(error);
    }
};


  return (
    <div className='container mx-auto'>
        <Navbar />
        <div>
        <h1 className='text-2x1 text-center mt-2'>Add New Restaurant</h1>
        </div>

        <fieldset className="fieldset">
  <legend className="fieldset-legend">Restaurant name</legend>
  <input type="text" name="title" className="input" placeholder="Type here" onChange={handleChange} />
        </fieldset>

        <fieldset className="fieldset">
  <legend className="fieldset-legend">Restaurant type</legend>
  <input type="text" name="type" className="input" placeholder="Type here" onChange={handleChange} />
        </fieldset>

        <fieldset className="fieldset">
  <legend className="fieldset-legend">Restaurant img</legend> <br />
  <input type="text" name="img" className="input" placeholder="Type here" onChange={handleChange} />
        </fieldset>
        {restaurant.img && (
            <div className='flex items-center gap-2'>
                <img className='h-32' src={restaurant.img} />
            </div>
        )} <br />

        <button className="btn btn-outline btn-success" onClick={(handleSubmit)}>Add</button>
        <button className="btn btn-outline btn-error">Cancel</button>
        

    </div>
  )
}

export default AddRestaurant