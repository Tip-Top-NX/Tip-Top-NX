import React from "react";
import { StyleSheet, View, Text } from "react-native";
const NotLoggedIn = () => {
  return (
    <View style={styles.container}>
      <Text>You have not logged in</Text>
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

export default NotLoggedIn;
