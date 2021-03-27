import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cuisineListAction } from "../redux/actions/cuisineListAction";
function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cuisineListAction());
  }, []);
  const cuisineList = useSelector((state) => state.cuisineList);
  console.log(cuisineList);
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
      {cuisineList.map((data, index) => (
        <div key={index}>
          <p>{data.name}</p>
        </div>
      ))}
    </>
  );
}

export default HomePage;
