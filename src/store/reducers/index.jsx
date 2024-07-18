import { combineReducers } from "redux";
import userAuthReducer from "./userAuthReducer";
import projectReducers from "./projectReducers";

const myReducer = combineReducers({
  user: userAuthReducer,
  projects: projectReducers,
});

export default myReducer;
