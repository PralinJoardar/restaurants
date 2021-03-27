import { combineReducers } from "redux";
import { cuisineListReducer } from "./cuisineListReducer";
import { restaurantListReducer } from "./restaurantListReducer";
const rootReducer = combineReducers({
  cuisineList: cuisineListReducer,
  restaurantList: restaurantListReducer,
});
export default rootReducer;
