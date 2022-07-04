import * as documentActions from "../Action/actions";
import initialState from "./initialState.json";

const documentReducer = (state = initialState.document, action) => {
  switch (action.type) {
    case documentActions.SET_SKIN:
      return {
        ...state,
        id: action.playload.id,
        skinCd: action.playload.skinCd,
      };
    case documentActions.UPDATE_SKIN:
      return {
        ...state,
        skinCd: action.playload.skinCd,
      };
    default:
      return state;
  }
};


export default documentReducer;