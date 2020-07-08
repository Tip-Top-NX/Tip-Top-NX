/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/Home/Home";
import Header from "../src/Header";
import Catalogue from "../src/Catalogue/Catalogue";
import Product from "../src/ProductDescription/ProductPage";
import Search from "../src/Search/Search";
import SizeChart from "../src/ProductDescription/SizeChart";
import FiltersMen from "../src/Catalogue/Filters/FiltersMen";
import FiltersAcc from "../src/Catalogue/Filters/FiltersAcc";
import Sort from "../src/Catalogue/Sort";
import CustomBack from "../src/BackButton";
import RightHeaderButton from "../src/RightHeaderButton";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 60 },
        headerBackTitle: null,
        headerTruncatedBackTitle: "",
        headerBackImage: () => <CustomBack />,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: () => <Header title="Home" showRight={true} />,
        }}
      />
      <Stack.Screen
        name="Catalogue"
        component={Catalogue}
        options={{
          headerTitle: null,
          headerRight: () => <RightHeaderButton />,
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          headerTitle: null,
          headerRight: () => <RightHeaderButton />,
        }}
      />
      <Stack.Screen name="FiltersMen" component={FiltersMen} />
      <Stack.Screen name="FiltersAcc" component={FiltersAcc} />
      <Stack.Screen name="Sort" component={Sort} />
      <Stack.Screen name="Size Chart" component={SizeChart} />
      <Stack.Screen
        options={{
          headerTitle: "Search",
        }}
        name="Search"
        component={Search}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
