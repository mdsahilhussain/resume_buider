import * as educationActions from "./action";

export const setEducation = (educaion) => {
  return {
    type: educationActions.SET_EDUCATION,
    payload: educaion,
  };
};

export const updateEducation = (educaion) => {
  return {
    type: educationActions.UPDATE_EDUCATION,
    payload: educaion,
  };
};
