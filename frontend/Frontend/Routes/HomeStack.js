/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/Catgories/Home/Home";
import Header from "../src/Header";
import Catelogue from "../src/Catgories/Catelogue";
import Product from "../src/ProductDescription/ProductPage";
import Search from "../src/SearchPage";
import CartStack from "./CartStack";
import SizeChart from "../src/ProductDescription/SizeChart";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: () => <Header />,
        }}
      />
      <Stack.Screen name="Catelogue" component={Catelogue} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="SizeChart" component={SizeChart} />
      <Stack.Screen name="Cart" component={CartStack} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Search"
        component={Search}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
