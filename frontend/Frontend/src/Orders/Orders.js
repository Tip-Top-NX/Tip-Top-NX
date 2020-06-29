/* eslint-disable */
import React from "react";
import { View, StyleSheet, Text, Image, ViewPropTypes, FlatList } from "react-native";
import { useSelector } from "react-redux";
import OrderCard from "./OrderCard";

const Orders = ({navigation}) => {
  const user = useSelector((state) => state.user);
  console.log("In orders.js");
  return (
    <View>
      <FlatList
        data={user.orders}
        vertical={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <OrderCard
            _id={item._id}
            contents={item.contents}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    height: 380,
    marginVertical: 20,
    justifyContent: "center",
    // flex: 1,
  },
});
