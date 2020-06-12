import * as ActionTypes from './ActionTypes';
import axios from '../axios';

export const signup = (user) => {
    return (dispatch) => {
        axios.post('/users/sign-up',{...user})
            .then((res) => {
                if(res.data.success===true){
                    dispatch(setUser(res.data.user,res.data.token));
                }
                else{
                    dispatch(signinFailed());
                }
            })
            .catch((err) => dispatch(signinFailed()));
    }
}

export const signin = (user) => {
    return (dispatch) => {
        axios.post('/users/login',{...user})
            .then((res) => {
                if(res.data.success===true){
                    dispatch(setUser(res.data.user,res.data.token));
                }
                else{
                    dispatch(signinFailed());
                }
            })
            .catch((err) => dispatch(signinFailed()));
    }
}

export const setUser = (user,token) => {
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
            token: token
        }
    }
}

export const signinFailed = () => {
    return {
        type: ActionTypes.SIGNIN_FAILED
    }
}