/* eslint-disable */
import React from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Empty from "../Empty";
import OrderCard from "./OrderCard";

const Orders = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  return (
    <SafeAreaView style={styles.container}>
      {user.orders.length === 0 ? (
        <Empty
          title="YOU DONT HAVE ANY ORDERS YET!"
          desc="TO SELECT PRODUCTS TO ORDER"
          navigation={props.navigation}
        />
        ) : (
        <FlatList
          data={user.orders}
          vertical={true}
          showsVerticalScrollIndicator={true}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => (
            <OrderCard
              _id={item._id}
              amount={item.amount}
              deliveryCharge={item.deliveryCharge}
              status={item.status}
              method={item.payment.method}
              orderDate={item.orderDate}
              contents={item.contents}
              name={user.name}
              address={user.address}
              navigation={navigation}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white"
  },
});
