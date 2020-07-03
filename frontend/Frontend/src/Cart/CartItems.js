/* eslint-disable */
import React from "react";
<<<<<<< HEAD
import { View, StyleSheet, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const CartItems = (props) => {
  console.log(props.cart);
  return (
    <View style={styles.container}>
      <FlatList
        data={props.cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <ProductCard
            _id={item._id}
            name={item.name}
            brand={item.brand}
            category={item.category}
            style={item.style}
            description={item.description}
            size={item.size}
            price={item.price}
            discountPercentage={item.discountPercentage}
          />
        )}
      />
=======
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
>>>>>>> 591ddc4e8fcb4bf9fca194bd8015fb919838f325
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    borderWidth: 1,
    width: "100%",
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
=======
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
    paddingLeft: 20,
    backgroundColor: "#FAEBEB",
>>>>>>> 591ddc4e8fcb4bf9fca194bd8015fb919838f325
  },
});
