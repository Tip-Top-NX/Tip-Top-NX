/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../src/Header";
import RightHeaderButton from "../src/RightHeaderButton";
import Wishlist from "../src/Profile/Wishlist/Wishlist";

const Stack = createStackNavigator();

const WishlistStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 60 },
        headerTitle: () => <Header title="Wishlist" showRight={false} />,
        headerRight: () => <RightHeaderButton />,
      }}
    >
      <Stack.Screen name="Wishlist" component={Wishlist} />
    </Stack.Navigator>
  );
};

export default WishlistStack;
