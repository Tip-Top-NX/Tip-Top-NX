import React, { useState, useEffect } from "react";
import {
  View
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { signup, signinFailed } from "../../../redux/ActionCreators";

const Mediator = ({ route, navigation }) => {

    const name=route.params.name;
    const email=route.params.email;
    const password=route.params.password;
    const contact=route.params.contact;

    const [flag,setFlag]=useState(0);

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(signinFailed());
    }, []);

    useEffect(() => {
        if (user.isValid) {
        navigation.navigate("Home");
        }
    }, [user.isValid]);

    const goAhead=()=>{
        if(flag==0){
            dispatch(
                signup({
                    name,
                    email,
                    password,
                    contact
                })
            );
        }
        setFlag(1)
    }

    return(
        <View>
            {goAhead()}
        </View>
    );
};

export default Mediator;