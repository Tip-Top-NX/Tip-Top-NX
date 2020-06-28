/* eslint-disable */
import React from "react";
import { View, StyleSheet, Text, Image, ViewPropTypes } from "react-native";
import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";

const Orders = () => {
  const user = useSelector((state) => state.user);

  return (
    <FlatList
      style={styles.container}
      data={user.order}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => (
        <OrderCard
          _id={item._id}
        />
      )}
    />
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
