import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "../Routes/HomeStack";
import Profile from "../src/Profile/ProfilePage";
import SignUpStack from "./SignUpStack";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="My Profile" component={Profile} />
      <Drawer.Screen name="Sign Up | Log In" component={SignUpStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
