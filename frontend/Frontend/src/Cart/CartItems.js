/* eslint-disable */
import React from "react";
import { ScrollView, StyleSheet, FlatList, View, Text } from "react-native";
import ProductCard from "./CartPage1/ProductCard";
import Total from "./CartPage1/Total";
import PlaceOrderTab from "./PlaceOrder";

const CartItems = (props) => {
  return (
    <View style={styles.overAllContainer}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {props.cart.map((item, index) => (
          <ProductCard
            key={index}
            images={item.product.images}
            _id={item.product._id}
            name={item.product.name}
            brand={item.product.brand}
            price={item.product.price}
            discountPercentage={item.discountPercentage}
            size={item.size}
            color={item.color}
            quantity={item.quantity}
          />
        ))}
        <View style={styles.tipStyle}>
          <Text>*** Shop for atleast Rs. 1000 for FREE delivery ***</Text>
        </View>
        <Total />
      </ScrollView>
      <PlaceOrderTab leftButton="ADD MORE" rightButton="NEXT" />
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    width: "100%",
    paddingBottom: 20,
    height: "80%",
  },
  overAllContainer: {
    // borderWidth: 1,
    width: "100%",
    minHeight: "100%",
  },
  tipStyle: {
    borderWidth: 1,
    width: "100%",
    paddingVertical: 15,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#FAEBEB",
  },
});
