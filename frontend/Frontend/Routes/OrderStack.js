/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Orders from "../src/Orders/Orders";
import OrderProductDetails from "../src/Orders/OrderProductDetails";
import OrderDetails from "../src/Orders/OrderDetails";

const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="My Orders"
        component={Orders}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Product Details"
        component={OrderProductDetails}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Order Details"
        component={OrderDetails}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;
