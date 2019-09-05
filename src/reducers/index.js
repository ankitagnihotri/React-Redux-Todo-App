import { combineReducers } from "redux";
import todos from "./TodoReducers";
import visibilityFilter from "./FilterReducer";

export default combineReducers({
  todos,
  visibilityFilter
});
