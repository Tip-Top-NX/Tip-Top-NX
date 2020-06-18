import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "../Routes/HomeStack";
import Profile from "../src/Profile/ProfilePage";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="My Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
