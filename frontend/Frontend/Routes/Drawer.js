import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "../Routes/HomeStack";
import SignUpStack from "./SignUpStack";
import ProfileStack from "./ProfileStack";
import SignOut from "../src/SignOut/SignOut";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      hideStatusBar={true}
      statusBarAnimation={"slide"}
      // drawerStyle={{
      //   backgroundColor: "#000",
      // }}
      // drawerContentOptions={{
      //   labelStyle: { color: "#fff", marginVertical: 5 },
      //   inactiveBackgroundColor: "#009ACD",
      //   activeBackgroundColor: "#236B8E",
      // }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="My Profile" component={ProfileStack} />
      <Drawer.Screen name="Sign Up | Log In" component={SignUpStack} />
      <Drawer.Screen name="Log Out" component={SignOut} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
