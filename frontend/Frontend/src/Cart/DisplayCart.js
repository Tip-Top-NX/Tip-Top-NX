import React from "react";
import { View, StyleSheet } from "react-native";
import CartItems from "./CartItems";

const DisplatCart = () => {
  return (
    <View style={styles.container}>
      <CartItems />
    </View>
  );
};

export default DisplatCart;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
  },
});
