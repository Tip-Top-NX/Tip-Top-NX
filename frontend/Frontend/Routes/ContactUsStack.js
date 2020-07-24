/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../src/Header";
import TC from "../src/TC";
import ContactUs from "../src/ContactUs/ContactUs";
import CustomBack from "../src/BackButton";

const Stack = createStackNavigator();

const ContactUsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 60 },
        headerTitle: () => <Header title="" showRight={false} />,
      }}
    >
      <Stack.Screen name="Contact Us" component={ContactUs} />
      <Stack.Screen
        name="Terms and Conditions"
        component={TC}
        options={{
          headerShown: true,
          headerTruncatedBackTitle: "",
          headerBackTitle: null,
          headerTitle: null,
          headerBackImage: () => <CustomBack />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ContactUsStack;
