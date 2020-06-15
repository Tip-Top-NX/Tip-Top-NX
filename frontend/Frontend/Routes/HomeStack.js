/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../src/Catgories/Home/Home";
import Header from "../src/Header";
import subCat1 from "../src/Catgories/SubCategories1";
import subCat2 from "../src/Catgories/SubCategories2";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: () => <Header />,
        headerShown: false,
        headerStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={Home}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="Sub-Categories1" component={subCat1} />
      <Stack.Screen name="Sub-Categories2" component={subCat2} />
    </Stack.Navigator>
  );
};

export default HomeStack;
