/* eslint-disable */
import * as ActionTypes from "./ActionTypes";
import { myAxios, getConfig } from "../axios";
import axios from 'axios';


export const postCart = (prodId) => {
  return (dispatch) => {
    getConfig().then((config) => {
      myAxios
        .post('/product/'+prodId+"/cart",null,config)
        .then((res) => dispatch(setCart(res.data.cart)))
        .catch((err) => console.log(err));
    })
  }
}

export const delCart = (prodId) => {
  return (dispatch) => {
    getConfig().then((config) => {
      myAxios
        .delete('/product/'+prodId+"/cart",null,config)
        .then((res) => dispatch(setCart(res.data.cart)))
        .catch((err) => console.log(err));
    })
  }
}


export const setCart = (cart) => {
  return {
    type: ActionTypes.SET_CART,
    payload: cart,
  }
}

export const postWishlist = (prodId) => {
  return (dispatch) => {
    getConfig().then((config) => {
      myAxios
        .post('/product/'+prodId+"/wishlist",null,config)
        .then((res) => dispatch(setWishlist(res.data.wishlist)))
        .catch((err) => console.log(err));
    })
  }
}

export const delWishlist = (prodId) => {
  return (dispatch) => {
    getConfig().then((config) => {
      myAxios
        .delete('/product/'+prodId+"/wishlist",null,config)
        .then((res) => dispatch(setWishlist(res.data.wishlist)))
        .catch((err) => console.log(err));
    })
  }
}

export const setWishlist = (wishlist) => {
  return {
    type: ActionTypes.SET_WISHLIST,
    payload: wishlist
  }
}

export const putProfile = (details) => {
  return (dispatch) => {
    getConfig().then((config) => {
      myAxios.put("/profile",details)
        .then((user) => {
          dispatch(setProfile(details));
        })
        .catch((err) => console.log(err));
    })
  }
}

export const setProfile = (details) => {
  return {
    type: ActionTypes.SET_PROFILE,
    payload: details
  }
}

export const postImage = (data) => {
  return (dispatch) => {
    getConfig().then((config) => {
      myAxios.post('/profile/uploadPhoto', data, {
        headers: {
          ...config.headers,
          'content-type': 'multipart/form-data'
        }
      })
        .then((res) => {
          dispatch(setPicture(res.data.image));
        })
        .catch((err) => console.log(err));
    });
  };
};

export const setPicture = (uri) => {
  return {
    type: ActionTypes.SET_PICTURE,
    payload: uri,
  }
}

export const signup = (user) => {
  return (dispatch) => {
    myAxios
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
    return myAxios
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
      gender: user.gender,
      age: user.age,
    },
  };
};

export const signinFailed = () => {
  return {
    type: ActionTypes.SIGNIN_FAILED,
  };
};
