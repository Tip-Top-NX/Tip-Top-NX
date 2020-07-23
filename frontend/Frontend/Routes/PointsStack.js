/* eslint-disable */
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Header from "../src/Header";
import RightHeaderButton from "../src/RightHeaderButton";
import Points from "../src/Profile/Points/Points";

const Stack = createStackNavigator();

const PointsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 60 },
        headerTitle: () => <Header title="Points" showRight={false} />,
        headerRight: () => <RightHeaderButton />,
      }}
    >
      <Stack.Screen name="Points" component={Points} />
    </Stack.Navigator>
  );
};

export default PointsStack;
