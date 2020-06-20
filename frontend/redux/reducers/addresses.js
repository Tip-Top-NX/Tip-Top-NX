import * as ActionTypes from "../ActionTypes";

export const addresses = ( state = {
        addresses:[]
    } , action ) => {

        switch(action.type){

            case ActionTypes.ADD_ADDRESS:
                var address = action.payload;
                return {...state, addresses :state.addresses.concat(address)};

            default:
                return state;  
        }
    };


export default addresses;