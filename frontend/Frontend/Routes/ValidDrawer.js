import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import OrderStack from "./OrderStack";
import CustomDrawer from "./CustomDrawer";
import CartStack from "./CartStack";

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
      <Drawer.Screen name="Cart" component={CartStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Wishlist" component={ProfileStack} />
      <Drawer.Screen name="Orders" component={OrderStack} />
    </Drawer.Navigator>
  );
};

export default ValidDrawer;
