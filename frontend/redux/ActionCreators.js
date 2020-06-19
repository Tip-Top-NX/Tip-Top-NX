/* eslint-disable */
import * as ActionTypes from "./ActionTypes";
import axios from "../axios";

export const updateProfile = (user) => {
  return (dispatch) => {
    axios.post("/profile/uploadPhoto", { ...user }).then((res) => {
      console.log("look here" + res.data);
      // if (res.data.success === true) {
      //   dispatch(setPicture(res.data.user));
      // } else {
      //   dispatch(signinFailed());
      // }
    });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    axios
      .post("/users/sign-up", { ...user })
      .then((res) => {
        if (res.data.success === true) {
          dispatch(setUser(res.data.user, res.data.token));
        } else {
          dispatch(signinFailed());
        }
      })
      .catch((err) => dispatch(signinFailed()));
  };
};

export const signin = (user) => {
  return (dispatch) => {
    axios
      .post("/users/login", { ...user })
      .then((res) => {
        if (res.data.success === true) {
          dispatch(setUser(res.data.user, res.data.token));
        } else {
          dispatch(signinFailed());
        }
      })
      .catch((err) => dispatch(signinFailed()));
  };
};

export const setPicture = (user) => {
  return {
    type: ActionTypes.SET_PICTURE,
    payload: {
      address: user.address,
      name: user.name,
      contact: user.contact,
      email: user.email,
      _id: user._id,
      image: user.image,
      points: user.points,
      orders: user.orders,
      wishlist: user.wishlist,
      cart: user.cart,
      token: token,
    },
  };
};

export const setUser = (user, token) => {
  return {
    type: ActionTypes.SET_USER,
    payload: {
      address: user.address,
      name: user.name,
      contact: user.contact,
      email: user.email,
      _id: user._id,
      image: user.image,
      points: user.points,
      orders: user.orders,
      wishlist: user.wishlist,
      cart: user.cart,
      token: token,
    },
  };
};

export const signinFailed = () => {
  return {
    type: ActionTypes.SIGNIN_FAILED,
  };
};

//ADDRESS ACTION CREATORS STARTS
export const postAddress = (address,type) => (dispatch) => {

    const newAddress = {
        address : address,
        type : type
    };

    return fetch(baseUrl + 'addresses', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => setTimeout(() => {dispatch(addAddress(response))}, 2000))
    .catch(error =>  { console.log('post addresses', error.message); alert('Your address could not be posted\nError: '+error.message);})
}

export const addAddress = (address) => ({
    type: ActionTypes.ADD_ADDRESS,
    payload: address
});
//ADDRESS PART ENDS