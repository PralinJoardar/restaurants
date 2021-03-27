import { FETCH_RESTAURANT_LIST } from "../constants";
export const restaurantListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_RESTAURANT_LIST:
      return (state = action.payload);

    default:
      return state;
  }
};
