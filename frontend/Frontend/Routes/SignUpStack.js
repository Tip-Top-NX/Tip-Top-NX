import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../src/SignUp/SignUp";
import SignIn from "../src/SignIn/SignIn";
import OtpVerify from "../src/SignUp/OtpVerify";
import OtpForgot from "../src/SignIn/OtpForgot";
import GetEmail from "../src/SignIn/GetEmail";
import ResetPassword from "../src/SignIn/ResetPassword";

const Stack = createStackNavigator();

const SignUpStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sign In" component={SignIn} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Otp Verify" component={OtpVerify} />
      <Stack.Screen name="Otp Forgot" component={OtpForgot} />
      <Stack.Screen name="Get Email" component={GetEmail} />
      <Stack.Screen
        name="Reset Password"
        component={ResetPassword}
        options={{ headerShown: true, headerLeft: null }}
      />
    </Stack.Navigator>
  );
};

export default SignUpStack;
