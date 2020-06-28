/* eslint-disable */
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const CartItems = () => {
  const user = useSelector((state) => state.user);
  const cart = [
    {
      _id: "25",
      name: "Tshirt",
      brand: "Jockey",
      category: "Upper",
      style: "half sleeve",
      description: "black color",
      size: "M",
      price: 500,
      discountPercentage: 20,
    },
    {
      _id: "15",
      name: "pant",
      brand: "Jockey",
      category: "Upper",
      style: "half pant",
      description: "white color",
      size: "L",
      price: 800,
      discountPercentage: 20,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
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
            cardStyle={styles.cardStyle}
            imageView={styles.imageView}
            details={styles.details}
            textStyle={styles.textStyle}
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
