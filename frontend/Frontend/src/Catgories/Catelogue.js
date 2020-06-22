/* eslint-disable */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "../ProductCard";

const Catelogue = ({ navigation }) => {
  const products = [
    {
      images: require("../../../assets/man.png"),
      _id: "1",
      name: "Name 1",
      price: "₹ 100",
    },
    {
      images: require("../../../assets/kid.png"),
      _id: "2",
      name: "Name 2",
      price: "₹ 200",
    },
    {
      images: require("../../../assets/women.png"),
      _id: "3",
      name: "Name 3",
      price: "₹ 300",
    },
    {
      images: require("../../../assets/kid.png"),
      _id: "4",
      name: "Name 4",
      price: "₹ 400",
    },
    {
      images: require("../../../assets/man.png"),
      _id: "5",
      name: "Name 5",
      price: "₹ 500",
    },
    {
      images: require("../../../assets/kid.png"),
      _id: "6",
      name: "Name 6",
      price: "₹ 600",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        key={products._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            images={item.images}
            name={item.name}
            price={item.price}
            navigation={navigation}
            _id={item._id}
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

const styles = StyleSheet.create({
  container: {
    height: "100%",
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  cardStyle: {
    width: 180,
    height: 320,
    alignItems: "center",
    marginHorizontal: 3,
    marginVertical: 5,
    borderStyle: "dotted",
    borderColor: "#FFB6C1",
    borderWidth: 1,
  },
  imageView: {
    width: 170,
    height: 250,
    alignSelf: "center",
    marginTop: 2,
  },
  details: {
    marginTop: 5,
    // borderWidth: 1,
    width: 170,
    height: 60,
    justifyContent: "space-evenly",
    paddingLeft: 10,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "500",
  },
});

export default Catelogue;
