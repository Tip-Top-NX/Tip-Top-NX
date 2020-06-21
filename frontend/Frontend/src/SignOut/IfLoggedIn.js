import React from "react";
import { StyleSheet, View, Text } from "react-native";
const IfLoggedIn = () => {
  return (
    <View style={styles.container}>
      <Text>You have been logged out</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
  },
});
export default IfLoggedIn;
