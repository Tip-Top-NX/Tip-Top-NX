/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import DisplayCart from "./DisplayCart";
import { StyleSheet, View } from "react-native";
import NotLoggedIn from "../SignOut/NotLoggedIn";

const Cart = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  if (user.isValid) {
    return <DisplayCart navigation={navigation} />;
  } else {
    return (
      <View style={styles.container}>
        <NotLoggedIn message="SORRY, YOU NEED TO LOG IN, IN ORDER TO VIEW YOUR CART" />
      </View>
    );
  }
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    height: 600,
    // backgroundColor: "#fff",
  },
});
