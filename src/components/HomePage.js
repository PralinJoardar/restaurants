import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cuisineListAction } from "../redux/actions/cuisineListAction";
import { restaurantListAction } from "../redux/actions/restaurantListAction";

function HomePage() {
  const [restraurantArray, setRestraurantArray] = useState([]);
  const restaurants = [];
  let filteredRestaurants = [];
  console.log("restraurantArray", restraurantArray);
  console.log("restraurants", restaurants);
  console.log("filteredRestaurants", filteredRestaurants);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cuisineListAction());
    dispatch(restaurantListAction());
  }, []);
  const cuisineList = useSelector((state) => state.cuisineList);
  const restaurantList = useSelector((state) => state.restaurantList);
  const handleCheckbox = (e, selectedRestaurants) => {
    let { name, checked } = e.target;
    console.log("checked", checked);
    checked
      ? setRestraurantArray([...restraurantArray, selectedRestaurants])
      : setRestraurantArray(
          [...restraurantArray],
          selectedRestaurants.splice(0, selectedRestaurants.length)
        );
  };
  restraurantArray.map((values) =>
    values.map((value) => restaurants.push(value.name))
  );

  restaurantList.map((data, index) =>
    restaurants.filter((value) => {
      if (value == data.name) {
        restaurants.forEach((ele) => {
          if (!filteredRestaurants.includes(ele)) filteredRestaurants.push(ele);
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
            onClick={(e) => handleCheckbox(e, cuisine.restaurants)}
          />
          {cuisine.name}
          &nbsp; &nbsp; &nbsp;
        </div>
      ))}
      <br />
      <br />
      <br />
      {filteredRestaurants == ""
        ? restaurantList.map((value, index) => (
            <div key={index}>
              <p>{value.name}</p>
            </div>
          ))
        : filteredRestaurants.map((data, index) => (
            <div key={index}>
              <p>{data}</p>
            </div>
          ))}
    </>
  );
}

export default HomePage;
