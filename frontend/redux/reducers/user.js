import { AsyncStorage } from "react-native";
import * as ActionTypes from "../ActionTypes";

const initialState = {
  isValid: false,
  token: AsyncStorage.getItem("token"),
};

const reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case ActionTypes.SET_USER:
      AsyncStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isValid: true,
      };
    case ActionTypes.SIGNIN_FAILED:
      return {
        ...initialState,
        isValid: false,
      };
    default:
      return state;
  }
};

export default reducer;
