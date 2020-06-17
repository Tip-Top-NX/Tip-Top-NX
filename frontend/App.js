import React from "react";
import { StyleSheet, View } from "react-native";
import Stack from "./Frontend/Routes/SignUpStack";
//import HomeStack from "./Frontend/Routes/HomeStack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
