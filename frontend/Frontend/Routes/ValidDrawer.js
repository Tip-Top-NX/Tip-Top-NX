import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import IfLoggedIn from "../src/SignOut/IfLoggedIn";

const Drawer = createDrawerNavigator();

const ValidDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      hideStatusBar={true}
      statusBarAnimation={"slide"}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="My Profile" component={ProfileStack} />
      <Drawer.Screen name="Log Out" component={IfLoggedIn} />
    </Drawer.Navigator>
  );
};

export default ValidDrawer;
