import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cuisineListAction } from "../redux/actions/cuisineListAction";
import { restaurantListAction } from "../redux/actions/restaurantListAction";

function HomePage() {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const restaurants = [];
  let filteredDisplayList = [];
  console.log("filteredDisplayList", filteredDisplayList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cuisineListAction());
    dispatch(restaurantListAction());
  }, []);
  const cuisineList = useSelector((state) => state.cuisineList);
  const restaurantList = useSelector((state) => state.restaurantList);

  const handleCheckbox = (restaurants) => {
    setFilteredRestaurants([...filteredRestaurants, restaurants]);
  };
  const handleOnChange = (e) => {};
  filteredRestaurants.map((values) =>
    values.map((value) => restaurants.push(value.name))
  );

  restaurantList.map((data, index) =>
    restaurants.filter((value) => {
      if (value == data.name) {
        restaurants.forEach((ele) => {
          if (!filteredDisplayList.includes(ele)) filteredDisplayList.push(ele);
        });
      }
    })
  );

  return (
    <>
      {cuisineList.map((cuisine, cuisineIndex) => (
        <div key={cuisineIndex} style={{ display: "inline-flex" }}>
          <input
            type="checkbox"
            name={cuisine.name}
            onClick={() => handleCheckbox(cuisine.restaurants)}
            onChange={() => handleOnChange()}
          />
          {cuisine.name}
          &nbsp; &nbsp; &nbsp;
        </div>
      ))}
      <br />
      <br />
      <br />
      {filteredDisplayList == ""
        ? restaurantList.map((value, index) => (
            <div key={index}>
              <p>{value.name}</p>
            </div>
          ))
        : filteredDisplayList.map((data, index) => (
            <div key={index}>
              <p>{data}</p>
            </div>
          ))}
    </>
  );
}

export default HomePage;
