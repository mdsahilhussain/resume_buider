import * as contactActions from "../Action/actions";
import initialState from "./initialState.json";

const contactReducer = (state = initialState.document, action) => {
  switch (action.type) {
    case contactActions.SET_CONTACT:
      return {
        ...action.playload,
      };
    case contactActions.UPDATE_CONTACT:
      return {
        ...action.playload,
      };
    default:
      return state;
  }
};

export default contactReducer;
