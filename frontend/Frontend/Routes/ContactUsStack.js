/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../src/Header";
import RightHeaderButton from "../src/RightHeaderButton";
import ContactUs from "../src/ContactUs/ContactUs";

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
    </Stack.Navigator>
  );
};

export default ContactUsStack;
