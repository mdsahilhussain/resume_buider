import { combineReducers } from "redux";
import documentReducer from "./documentReducer";
import educationReducer from "./educationReducer";
import contactReducer from "./contactReducer";

const rootReducer = combineReducers({
  document: documentReducer,
  education: educationReducer,
  contact: contactReducer,
});

export default rootReducer;
