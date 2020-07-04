import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "./HomeStack";
import SignUpStack from "./SignUpStack";
import ProfileStack from "./ProfileStack";
import CartStack from "./CartStack";

const Drawer = createDrawerNavigator();

const InvalidDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      hideStatusBar={true}
      statusBarAnimation={"slide"}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Cart" component={CartStack} />
      <Drawer.Screen name="My Profile" component={ProfileStack} />
      <Drawer.Screen name="Sign Up | Log In" component={SignUpStack} />
    </Drawer.Navigator>
  );
};

export default InvalidDrawer;
