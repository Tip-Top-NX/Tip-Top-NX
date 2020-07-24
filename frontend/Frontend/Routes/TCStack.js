/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TC from "../src/TC";
import Header from "../src/Header";

const Stack = createStackNavigator();

const ContactUsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 60 },
        headerTitle: () => (
          <Header title="Terms & Conditions" showRight={false} />
        ),
      }}
    >
      <Stack.Screen name="Terms and Conditions" component={TC} />
    </Stack.Navigator>
  );
};

export default ContactUsStack;
