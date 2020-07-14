/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Cart from "../src/Cart/Cart";
import CartPage2 from "../src/Cart/CartPage2/CartPage2";
import OrderConfirm from "../src/Cart/CartPage3/OrderConfirmed";
import CustomBack from "../src/BackButton";

import Header from "../src/Header";


const Stack = createStackNavigator();

const CartStack = () => {
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
        name="Cart"
        component={Cart}
        options={{
          headerShown: true,
          headerTitle: () => <Header title="Cart" showRight={false} />,
        }}
      />
      <Stack.Screen name="Address and Payment" component={CartPage2} />
      <Stack.Screen
        name="OrderConfirm"
        component={OrderConfirm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
