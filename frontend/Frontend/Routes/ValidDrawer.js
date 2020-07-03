import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";
import OrderStack from "./OrderStack";
<<<<<<< HEAD
import LogOut from "../src/SignOut/LogOut";
import CustomDrawer from './CustomDrawer';
=======
import CustomDrawer from "./CustomDrawer";
import CartStack from "./CartStack";
>>>>>>> 591ddc4e8fcb4bf9fca194bd8015fb919838f325

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
<<<<<<< HEAD
      <Drawer.Screen name="My Profile" component={ProfileStack} />
      <Drawer.Screen name="My Orders" component={OrderStack} />
=======
      <Drawer.Screen name="Cart" component={CartStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Wishlist" component={ProfileStack} />
      <Drawer.Screen name="Orders" component={OrderStack} />
>>>>>>> 591ddc4e8fcb4bf9fca194bd8015fb919838f325
    </Drawer.Navigator>
  );
};

export default ValidDrawer;
