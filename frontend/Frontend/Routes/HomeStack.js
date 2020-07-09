/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/Home/Home";
import Header from "../src/Header";
import Catalogue from "../src/Catalogue/Catalogue";
import Product from "../src/ProductDescription/ProductPage";
import Search from "../src/Search/Search";
import SizeChart from "../src/ProductDescription/SizeChart";
import Filters from "../src/Catalogue/Filters/Filters";
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
      <Stack.Screen name="Filters" component={Filters} />
      <Stack.Screen name="Sort" component={Sort} />
      <Stack.Screen name="Size Chart" component={SizeChart} />
      <Stack.Screen
        options={{
          headerTitle: null,
        }}
        name="Search"
        component={Search}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
