<<<<<<< HEAD
=======
/* eslint-disable */
>>>>>>> 591ddc4e8fcb4bf9fca194bd8015fb919838f325
import React from "react";
import { View, StyleSheet } from "react-native";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import Empty from "../Empty";

<<<<<<< HEAD
const DisplatCart = () => {
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      {user.cart.length === 0 ? <Empty /> : <CartItems cart={user.cart} />}
=======
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
>>>>>>> 591ddc4e8fcb4bf9fca194bd8015fb919838f325
    </View>
  );
};

export default DisplatCart;

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    borderWidth: 1,
    width: "100%",
=======
    width: "100%",
    flex: 1,
>>>>>>> 591ddc4e8fcb4bf9fca194bd8015fb919838f325
    alignItems: "center",
  },
});
