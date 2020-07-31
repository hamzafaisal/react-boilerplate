import { countReducer } from "./countReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  count: countReducer,
});
