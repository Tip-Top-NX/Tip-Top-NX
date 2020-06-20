import { AsyncStorage } from "react-native";
import * as ActionTypes from "../ActionTypes";


const initialState = {
  isValid: false,
  token: AsyncStorage.getItem("token"),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      AsyncStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isValid: true,
      };
    case ActionTypes.SIGNIN_FAILED:
      // console.log("called");
      AsyncStorage.removeItem("token")
        .then(() => {
          return {
            ...initialState,
            isValid: false,
            token: "",
          };
        });
    case ActionTypes.SET_PICTURE:
      return {
        ...state,
        image: action.payload,
      };
    case ActionTypes.SET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };
    case ActionTypes.SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case ActionTypes.SET_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
