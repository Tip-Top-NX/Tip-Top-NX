import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import OrderStack from "./OrderStack";
import LogOut from "../src/SignOut/LogOut";
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const ValidDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      hideStatusBar={true}
      statusBarAnimation={"slide"}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="My Profile" component={ProfileStack} />
      <Drawer.Screen name="My Orders" component={OrderStack} />
    </Drawer.Navigator>
  );
};

export default ValidDrawer;
