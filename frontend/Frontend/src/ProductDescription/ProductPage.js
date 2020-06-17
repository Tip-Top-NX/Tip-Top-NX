import React from "react";
import { View, Text, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const Product = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: width,
        height: "100%",
      }}
    >
      <Text>THIS IS A DUMMY PRODUCT PAGE</Text>
    </View>
  );
};

export default Product;
