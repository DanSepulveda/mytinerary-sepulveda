import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import usersReducer from "./usersReducer";
import commentsReducer from "./commentsReducer"

const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itinerariesReducer,
  users: usersReducer,
  comments: commentsReducer
});

export default rootReducer;