import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const UpdateRestaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurants] = useState({
    title: "",
    type: "",
    img: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/restaurants/" + id)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setRestaurants(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurants({ ...restaurant, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/restaurants/" + id, {
        method: "PUT",
        body: JSON.stringify(restaurant),
      });

      if (response.ok) {
        alert("Restaurant Update successfully!");
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
    <div className="container mx-auto">
      <div>
        <h1 className="text-2x1 text-center mt-2">Update Restaurant</h1>
      </div>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Update Restaurant name</legend>
        <input
          type="text"
          name="title"
          value={restaurant.title}
          className="input"
          placeholder="Type here"
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Update Restaurant type</legend>
        <input
          type="text"
          name="type"
          value={restaurant.type}
          className="input"
          placeholder="Type here"
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Update Restaurant img</legend>{" "}
        <br />
        <input
          type="text"
          name="img"
          value={restaurant.img}
          className="input"
          placeholder="Type here"
          onChange={handleChange}
        />
      </fieldset>
      {restaurant.img && (
        <div className="flex items-center gap-2">
          <img className="h-32" src={restaurant.img} />
        </div>
      )}{" "}
      <br />
      <button className="btn btn-outline btn-success" onClick={handleSubmit}>
        Add
      </button>
      <button className="btn btn-outline btn-error">Cancel</button>
    </div>
  );
};

export default UpdateRestaurant;
