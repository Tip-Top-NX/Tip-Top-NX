/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/Catgories/Home/Home";
import Header from "../src/Header";
import Catelogue from "../src/Catgories/Catelogue";
import Product from "../src/ProductDescription/ProductPage";
import Cart from "../src/Cart/Cart";
import Search from "../src/SearchPage";
import Address from "../src/Cart/Address";

const Stack = createStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Address" component={Address} />
    </Stack.Navigator>
  );
};

export default CartStack;
