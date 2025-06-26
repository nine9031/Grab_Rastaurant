import React, { useState, useEffect } from "react";
import Restaurant from "../components/Restaurant";
const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [fileterRestaurants, setfileterRestaurants] = useState([]);

  const handleSearch = (keyword) => {
    if (keyword === "") {
      setfileterRestaurants(restaurants);
      return;
    }
    const result = restaurants.filter((restaurant) => {
      return (
        restaurant.title.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.type.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    setfileterRestaurants(result);
  };

  useEffect(() => {
    //call api: getAllRestaurants
    fetch("http://localhost:5000/restaurants")
      .then((res) => {
        return res.json();
      })
      //save to state
      .then((response) => {
        setRestaurants(response);
        setfileterRestaurants(response);
      })
      //catch error
      .catch((err) => {
        console.log(err.massage);
      });
  }, []);
  return (
    <div className="container mx-auto ">
      {
        //Navigation Bar
      }

      {
        //Header
      }
      <div>
        <h1 className="title justify-center text-3xl text-center m-5 p-5 ">
          Grab Restaurant
        </h1>
      </div>
      {
        //Sreach Bar
      }
      <div className="mb-5 flex justify-center item-center">
        <label className="input flex item-center gap-2 w-2xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            name="keyword"
            onChange={(e) => handleSearch(e.target.value)}
            required
            placeholder="Search"
          />
        </label>
      </div>
      <Restaurant restaurants={fileterRestaurants} />
    </div>
  );
};

export default Home;
