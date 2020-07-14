import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../src/SignUp/SignUp";
import SignIn from "../src/SignIn/SignIn";
import OtpMobile from "../src/SignUp/OtpMobile";
import OtpEmail from "../src/SignIn/OtpEmail";
import GetEmail from "../src/SignIn/GetEmail";
import ChangePassword from "../src/Profile/ChangePassword/ChangePassword";
import ResetPassword from "../src/SignIn/ResetPassword";

const Stack = createStackNavigator();

const SignUpStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Sign In" component={SignIn} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Otp Mobile" component={OtpMobile} />
      <Stack.Screen name="Otp Email" component={OtpEmail} />
      <Stack.Screen name="Get Email" component={GetEmail} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Change Password" component={ChangePassword} options={{ headerShown: true }}/>

    </Stack.Navigator>
  );
};

export default SignUpStack;
