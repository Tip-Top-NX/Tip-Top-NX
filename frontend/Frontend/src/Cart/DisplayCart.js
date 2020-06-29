import React from "react";
import { View, StyleSheet } from "react-native";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import Empty from "../Empty";

const DisplatCart = () => {
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      {user.cart.length === 0 ? <Empty /> : <CartItems cart={user.cart} />}
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
