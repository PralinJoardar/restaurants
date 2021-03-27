import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cuisineListAction } from "../redux/actions/cuisineListAction";
import { restaurantListAction } from "../redux/actions/restaurantListAction";
function HomePage() {
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  console.log("filteredRestaurants",filteredRestaurants);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cuisineListAction());
    dispatch(restaurantListAction());
  }, []);
  const cuisineList = useSelector((state) => state.cuisineList);
  const restaurantList = useSelector((state) => state.restaurantList);

  console.log("cuisineList", cuisineList);
  console.log("restaurantList", restaurantList);

  const handleCheckbox=(cuisine)=>{
    cuisine.restaurants.map((restaurant,restaurantIndex)=>(
      <div key={restaurantIndex}>
        {setFilteredRestaurants([...filteredRestaurants,restaurant.name])}
        {console.log("restaurant names",restaurant.name)}
      </div>
    ))
  }
  return (
    <>
      {cuisineList.map((cuisine, cuisineIndex) => (
        <div key={cuisineIndex} style={{ display: "inline-flex" }}>
          <input type="checkbox" onClick={()=>handleCheckbox(cuisine)}/>
          {cuisine.name}
          &nbsp; &nbsp; &nbsp;
        </div>
      ))}
      <br />
      <br />
      <br />
      {restaurantList.map((data, index) => (
        <div key={index}>
          <p>{data.name}</p>
        </div>
      ))}
    </>
  );
}

export default HomePage;
