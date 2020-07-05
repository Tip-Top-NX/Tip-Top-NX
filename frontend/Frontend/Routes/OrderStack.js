/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Orders from "../src/Orders/Orders";
import OrderProductDetails from "../src/Orders/OrderProductDetails";
import OrderDetails from "../src/Orders/OrderDetails";
import Header from "../src/Header";
import CustomBack from "../src/BackButton";
import RightHeaderButton from "../src/RightHeaderButton";

const Stack = createStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 60 },
        headerBackTitle: null,
        headerTruncatedBackTitle: "",
        headerBackImage: () => <CustomBack />,
        headerRight: () => <RightHeaderButton />,
      }}
    >
      <Stack.Screen
        name="My Orders"
        component={Orders}
        options={{
          headerShown: true,
          headerTitle: () => <Header title="Orders" showRight={false} />,
        }}
      />
      <Stack.Screen name="Product Details" component={OrderProductDetails} />
      <Stack.Screen name="Order Details" component={OrderDetails} />
    </Stack.Navigator>
  );
};

export default OrderStack;
