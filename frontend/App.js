/* eslint-disable */
import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/ConfigureStore";
import CheckUser from "./Frontend/src/CheckUser";
import SearchPage from "./Frontend/src/SearchPage";
const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <CheckUser />
        </NavigationContainer>
      </View>
    </Provider>
    //<SearchPage />
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
