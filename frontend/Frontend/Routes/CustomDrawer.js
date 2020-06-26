/* eslint-disable */
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import React from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { signinFailed } from "../../redux/ActionCreators";

function CustomDrawerContent(props) {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Yes",
          onPress: () => {
            dispatch(signinFailed());
            props.navigation.navigate("Home");
          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => logoutHandler()} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
