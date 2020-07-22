/* eslint-disable */
import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

import { useNavigation, useLinkProps } from "@react-navigation/native";

const ButtonBox = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.buttonBoxStyle}>
      <TouchableOpacity
        style={[styles.buttonBox, { backgroundColor: "#fff", borderWidth: 1 }]}
        onPress={() => {
          navigation.navigate("Sort", {
            order: props.order,
            forSort: props.forSort,
          });
        }}
      >
        <Text style={[styles.buttonText, { color: "#000" }]}>SORT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonBox}
        onPress={() => {
          navigation.navigate("Filters", {
            prodId: props.prodId,
            // allSelected: props.allSelected,
            // priceLower: props.priceLower,
            // priceUpper: props.priceUpper,
            cat: props.cat,
            forSort: props.forSort,
          });
        }}
      >
        <Text style={styles.buttonText}>FILTER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonBox;

const styles = StyleSheet.create({
  buttonBoxStyle: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
    // backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonBox: {
    width: 170,
    height: 40,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C2185B",
    borderColor: "#C2185B",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
