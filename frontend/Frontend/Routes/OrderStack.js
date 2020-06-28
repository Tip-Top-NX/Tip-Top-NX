import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Orders from "../src/Orders/Orders";

const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Orders"
        component={Orders}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;