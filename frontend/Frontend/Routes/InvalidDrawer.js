import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeStack from "./HomeStack";
import SignUpStack from "./SignUpStack";
import ProfileStack from "./ProfileStack";

const Drawer = createDrawerNavigator();

const InvalidDrawer = () => {
  return (
<<<<<<< Updated upstream:frontend/Frontend/Routes/Drawer.js
    <Drawer.Navigator initialRouteName="HomeStack">
=======
    <Drawer.Navigator
      initialRouteName="HomeStack"
      hideStatusBar={true}
      statusBarAnimation={"slide"}
    >
>>>>>>> Stashed changes:frontend/Frontend/Routes/InvalidDrawer.js
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="My Profile" component={ProfileStack} />
      <Drawer.Screen name="Sign Up | Log In" component={SignUpStack} />
    </Drawer.Navigator>
  );
};

export default InvalidDrawer;
