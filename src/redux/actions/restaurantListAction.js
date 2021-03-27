import restaurants from "../../data/restaurants.json";
import { FETCH_RESTAURANT_LIST } from "../constants";
export const restaurantListAction = () => {
  const restaurantList = restaurants[0].data;
  return {
    type: FETCH_RESTAURANT_LIST,
    payload: restaurantList,
  };
};
