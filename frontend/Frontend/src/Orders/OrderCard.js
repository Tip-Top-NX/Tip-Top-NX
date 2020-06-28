import React from "react";
import { View, StyleSheet, Text } from "react-native";
//import ProductCard from "./OrderedProductCard";

const OrderCard = (props) => {
  return (
    <View style={styles.orderBox}>
      <Text style={{ paddingLeft: 10, paddingTop: 5 }}>
        ORDER NUMBER :<Text style={styles.orderNumberText}> {props._id}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  orderBox: {
    justifyContent: "center",
    borderWidth: 1,
    width: "100%",
    borderColor: "silver",
  },
  orderNumberText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default OrderCard;
