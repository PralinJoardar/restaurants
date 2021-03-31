import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cuisineListAction } from "../redux/actions/cuisineListAction";
<<<<<<< HEAD
=======
import { restaurantListAction } from "../redux/actions/restaurantListAction";

>>>>>>> ae2b71514d6fdd79f839f06afda125f6f69c0017
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
  }, []);
  const cuisineList = useSelector((state) => state.cuisineList);
<<<<<<< HEAD

  console.log("cuisineList", cuisineList);
sadsadsadasd
  return (
    <>
      <div style={{ margin: "auto", width: "50%" }}>
        <input type="checkbox" />
        Chinese &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="checkbox" />
        Indian &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="checkbox" />
        Thai &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="checkbox" />
        Greek &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="checkbox" />
        Vietnamese &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="checkbox" />
        French &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      {cuisineList.map((cuisine, cuisineIndex) => (
        <div key={cuisineIndex}>
          {cuisine.restaurants.map((restaurant, restaurantIndex) => (
            <div key={restaurantIndex}>
              <p>{restaurant.name}</p>
            </div>
          ))}
=======
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
>>>>>>> ae2b71514d6fdd79f839f06afda125f6f69c0017
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
