import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "./HomeStack";
import SignUpStack from "./SignUpStack";
import ProfileStack from "./ProfileStack";
import SignOut from "../src/SignOut/SignOut";

const Drawer = createDrawerNavigator();

const InvalidDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      hideStatusBar={true}
      statusBarAnimation={"slide"}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="My Profile" component={ProfileStack} />
      <Drawer.Screen name="Sign Up | Log In" component={SignUpStack} />
      <Drawer.Screen name="Log Out" component={SignOut} />
    </Drawer.Navigator>
  );
};

export default InvalidDrawer;
