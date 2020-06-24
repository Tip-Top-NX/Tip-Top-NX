/* eslint-disable */
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ProductCard = () => {
  return (
    <View style={styles.productCard}>
      <Image
        style={styles.imageStyle}
        source={require("../../../../assets/man.png")}
      />
      <View style={styles.detailsBox}>
        <View style={styles.details}>
          <Text style={styles.brandName}>Jockey</Text>
          <Text style={styles.productDetails}>#US04 Pack of 2 thermals</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.sizeStyle}>Size: M</Text>
            <Text style={styles.qtyStyle}>Qty: 1</Text>
          </View>
          <Text style={styles.priceStyle}>Price: 669/-</Text>
          <Text style={styles.statusStyle}>Status : Completed</Text>
        </View>
      </View>
      <View style={styles.iconBox}>
        <AntDesign name="right" size={30} color="silver" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    marginVertical: 5,
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "silver",
  },
  imageStyle: {
    width: 100,
    height: 130,
    borderWidth: 1,
    borderColor: "silver",
  },
  detailsBox: {
    // borderWidth: 1,
    width: 200,
    height: 150,
    justifyContent: "center",
  },
  iconBox: {
    width: 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  details: {
    justifyContent: "center",
    // borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 7,
  },
  brandName: {
    fontWeight: "bold",
    fontSize: 15,
    paddingVertical: 4,
    letterSpacing: 0.5,
  },
  productDetails: {
    color: "grey",
    paddingVertical: 4,
  },
  sizeStyle: {
    width: "50%",
    fontWeight: "bold",
    paddingVertical: 4,
  },
  qtyStyle: {
    width: "50%",
    fontWeight: "bold",
    paddingVertical: 4,
  },
  priceStyle: {
    fontWeight: "bold",
    paddingVertical: 4,
  },
  statusStyle: {
    fontWeight: "bold",
    paddingVertical: 4,
    fontSize: 15,
  },
});

export default ProductCard;
