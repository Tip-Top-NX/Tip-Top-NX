import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TC from "../src/TC";
import CustomBack from "../src/BackButton";

const Stack = createStackNavigator();

const TCStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: { height: 60 },
        headerBackTitle: null,
        headerTruncatedBackTitle: "",
        headerBackImage: () => <CustomBack />
      }}
    >
      <Stack.Screen
        name="Terms and Conditions"
        component={TC}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default TCStack;