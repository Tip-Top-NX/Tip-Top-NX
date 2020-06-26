/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/Catgories/Home/Home";
import Header from "../src/Header";
import Catelogue from "../src/Catgories/Catelogue";
import Product from "../src/ProductDescription/ProductPage";
import Search from "../src/SearchPage";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: () => <Header />,
        }}
      />
      <Stack.Screen name="Catelogue" component={Catelogue} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Search" component ={Search} />
      
    </Stack.Navigator>
  );
};

export default HomeStack;
