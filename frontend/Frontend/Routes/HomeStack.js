/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/Home/Home";
import Header from "../src/Header";
import Catalogue from "../src/Catalogue/Catalogue";
import Product from "../src/ProductDescription/ProductPage";
import Search from "../src/SearchPage";
import CartStack from "./CartStack";
import SizeChart from "../src/ProductDescription/SizeChart";
import Filters from "../src/Catalogue/Filters";
import Sort from "../src/Catalogue/Sort";

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
      <Stack.Screen name="Catalogue" component={Catalogue} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Filters" component={Filters} />
      <Stack.Screen name="Sort" component={Sort} />
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
