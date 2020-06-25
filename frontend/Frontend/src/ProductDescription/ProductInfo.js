import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.descriptionStyle}>
        <View style={styles.brandNameBox}>
          <Text style={styles.brandNameText}>JOCKEY</Text>
        </View>
        <View style={styles.productNameBox}>
          <Text style={styles.productNameText}>#US 04 Sleeveless Tshirt</Text>
        </View>
      </View>
      <View style={styles.priceBox}>
        <View style={styles.correctedPrice}>
          <Text style={styles.discountedPriceText}>₹ 600</Text>
          <Text style={styles.originalPriceText}>₹ 1200</Text>
          <Text style={styles.discountedPercentText}>( 50% )</Text>
        </View>
        <Text style={styles.note}>INCLUSIVE OF ALL TAXES</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  descriptionStyle: {
    padding: 5,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  brandNameBox: {
    width: "25%",
    // borderWidth: 1,
    padding: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  brandNameText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  productNameBox: {
    width: "75%",
    // borderWidth: 1,
    padding: 2,
    marginTop: 10,
  },
  productNameText: {
    fontSize: 15,
  },
  priceBox: {
    // borderWidth: 1,
    padding: 5,
    paddingLeft: 20,
    justifyContent: "space-between",
  },
  discountedPriceText: {
    fontSize: 18,
    marginHorizontal: 8,
    fontWeight: "bold",
    color: "#444",
  },
  originalPriceText: {
    fontSize: 18,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "grey",
    marginHorizontal: 5,
  },
  note: {
    color: "#2FAA96",
    fontWeight: "bold",
    fontSize: 11,
    paddingTop: 7,
    paddingLeft: 10,
    marginBottom: 5,
  },
  correctedPrice: {
    flexDirection: "row",
    // borderWidth: 1,
    alignItems: "center",
  },
  discountedPercentText: {
    fontSize: 18,
    color: "red",
    marginHorizontal: 2,
  },
});

export default ProductInfo;
