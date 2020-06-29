/* eslint-disable */
import React from "react";
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
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: "100%",
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
