import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ProductDetails = () => {
  return (
    <View style={styles.container}>
      <Text>Item Description</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 100,
    marginTop: 10,
    backgroundColor: "#fff",
  },
});
