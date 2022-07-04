import * as educationActions from "../Action/actions";
import initialState from "./initialState.json";

const educationReducer = (state = initialState.document, action) => {
  switch (action.type) {
    case educationActions.SET_EDUCTION:
      return {
        ...action.playload,
      };
    case educationActions.UPDATE_EDUCTION:
      return {
        ...action.playload,
      };
    default:
      return state;
  }
};

export default educationReducer;
