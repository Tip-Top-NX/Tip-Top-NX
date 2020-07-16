import { AsyncStorage } from "react-native";
import * as ActionTypes from "../ActionTypes";

const initialState = {
  isValid: false,
  token: AsyncStorage.getItem("token"),
  isFetching: false,
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
      AsyncStorage.removeItem("token");
      return {
        ...initialState,
        isValid: false,
        isFetching: false,
      };
    case ActionTypes.FETCHING_USER:
      return {
        ...state,
        isFetching: action.payload,
      };
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
        cartTotal: action.cartTotal,
      };
    case ActionTypes.SET_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    case ActionTypes.PLACE_ORDER:
      return {
        ...state,
        ...action.payload,
      };
    case ActionTypes.CANCEL_ORDER:
      const orders = [...state.orders];
      for(var i=0;i<orders.length;i++){
        if(orders[i]._id==action.payload){
          orders[i].status = "CANCELLED";
          console.log(orders[i]);
          break;
        }
      }
      return {
        ...state,
        orders: [...orders]
      };
    default:
      return state;
  }
};

export default reducer;
