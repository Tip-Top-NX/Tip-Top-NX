/* eslint-disable */
import React from "react";
import { View, StyleSheet } from "react-native";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import Empty from "../Empty";

const DisplatCart = (props) => {
  const user = useSelector((state) => state.user);
  return (
    <View style={styles.container}>
      {user.cart.length === 0 ? (
        <Empty
          title="YOUR CART IS EMPTY"
          desc="TO ADD ITEMS TO YOUR CART"
          navigation={props.navigation}
        />
      ) : (
        <CartItems cart={user.cart} />
      )}
    </View>
  );
};

export default DisplatCart;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
});