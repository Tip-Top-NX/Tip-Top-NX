/* eslint-disable */
import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { postCart } from "../../../redux/ActionCreators";

const ButtonBar = (props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.wishlistButtonContainer}>
        <TouchableOpacity style={styles.wishlistButton}>
          <MaterialIcons name="bookmark-border" size={25} color="black" />
          <Text style={styles.wishlistText}>WISHLIST</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addToCartButtonContainer}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => dispatch(postCart(props._id))}
        >
          <AntDesign name="shoppingcart" size={25} color="white" />
          <Text style={styles.addToCartText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonBar;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    height: 80,
    marginTop: 10,
    borderColor: "#ccc",
    // backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  wishlistButtonContainer: {
    borderWidth: 1,
    width: 156,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C2185B",
  },
  addToCartButtonContainer: {
    borderWidth: 1,
    width: 186,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
  },
  wishlistButton: {
    width: 150,
    borderWidth: 1,
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  addToCartButton: {
    width: 180,
    borderWidth: 1,
    backgroundColor: "#C2185B",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  addToCartText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 7,
  },
  wishlistText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 2,
  },
});
