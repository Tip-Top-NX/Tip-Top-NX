/* eslint-disable */
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ProductDetails = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>DESCRIPTION</Text>
      </View>
      <View>
        <Text>{props.styles}</Text>
        <Text>{props.description}</Text>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  header: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    justifyContent: "center",
    paddingLeft: 10,
  },
  headerText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 12,
  },
});
