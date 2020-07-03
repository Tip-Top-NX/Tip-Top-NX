/* eslint-disable */
import React from "react";
<<<<<<< HEAD
import Empty from "../Empty";
=======
>>>>>>> 591ddc4e8fcb4bf9fca194bd8015fb919838f325
import { useSelector } from "react-redux";
import DisplayCart from "./DisplayCart";
import { StyleSheet, View } from "react-native";
import NotLoggedIn from "../SignOut/NotLoggedIn";

const Cart = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  if (user.isValid) {
<<<<<<< HEAD
    return <DisplayCart />;
=======
    return <DisplayCart navigation={navigation} />;
>>>>>>> 591ddc4e8fcb4bf9fca194bd8015fb919838f325
  } else {
    return (
      <View style={styles.container}>
        <NotLoggedIn />
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
