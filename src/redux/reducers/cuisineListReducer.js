import { FETCH_CUISINE_LIST } from "../constants";
export const cuisineListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CUISINE_LIST: {
      return (state = action.payload);
    }

    default:
      return state
  }
};
