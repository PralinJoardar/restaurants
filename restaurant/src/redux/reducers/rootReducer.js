import { combineReducers } from "redux";
import { cuisineListReducer } from "./cuisineListReducer";
const rootReducer = combineReducers({
  cuisineList: cuisineListReducer,
});
export default rootReducer;
