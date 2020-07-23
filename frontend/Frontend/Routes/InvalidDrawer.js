import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "./HomeStack";
import SignUpStack from "./SignUpStack";
import ProfileStack from "./ProfileStack";
import CartStack from "./CartStack";
import CustomInvalidDrawer from "./CustomInvalidDrawer";
import ContactUsStack from "./ContactUsStack";

const Drawer = createDrawerNavigator();

const InvalidDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Sign Up | Log In"
      hideStatusBar={true}
      statusBarAnimation={"slide"}
      drawerContent={(props) => <CustomInvalidDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Cart" component={CartStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Sign Up | Log In" component={SignUpStack} />
      <Drawer.Screen name="Contact Us" component={ContactUsStack} />
    </Drawer.Navigator>
  );
};

export default InvalidDrawer;
