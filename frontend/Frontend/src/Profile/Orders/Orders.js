/* eslint-disable */
import React from "react";
import { View, StyleSheet, Text, Image, ViewPropTypes } from "react-native";
import OrderCard from "./OrderCard";

const Orders = () => {
  return (
    <View style={styles.container}>
      <OrderCard />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
    // borderWidth: 1,
  },
});
