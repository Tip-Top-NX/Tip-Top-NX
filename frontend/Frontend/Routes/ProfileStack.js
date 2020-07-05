/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../src/Profile/ProfilePage";
import EditProfile from "../src/Profile/EditProfile/EditProfile";
import Points from "../src/Profile/Points/Points";
import Wishlist from "../src/Profile/Wishlist/Wishlist";
import OrderStack from "./OrderStack";
import CustomBack from "../src/BackButton";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { height: 60 },
        headerBackTitle: null,
        headerTruncatedBackTitle: "",
        headerBackImage: () => <CustomBack />,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Points"
        component={Points}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="My Orders"
        component={OrderStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
