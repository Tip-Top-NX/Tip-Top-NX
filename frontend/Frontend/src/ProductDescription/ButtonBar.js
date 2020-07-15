/* eslint-disable */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { postCart, postWishlist } from "../../../redux/ActionCreators";
import { useNavigation } from "@react-navigation/native";

const ButtonBar = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);
  const [buttonText, setButtonText] = useState("ADD TO CART");
  const [itemStatus, setItemStatus] = useState("WISHLIST");

  useEffect(() => {
    if (user.isValid) {
      if (user.wishlist.filter((item) => item._id == props._id).length == 0) {
        setItemStatus("WISHLIST");
      } else {
        setItemStatus("ADDED");
      }
    }
  }, []);

  const wishlistHandler = () => {
    if (user.isValid) {
      if (itemStatus === "WISHLIST") {
        dispatch(postWishlist(props._id));
        setItemStatus("ADDED");
      }
    } else {
      Alert.alert(
        "Cannot Add To Wishlist",
        "You need to login first in order to add items to the wishlist",
        [
          {
            text: "Okay",
            style: "okay",
          },
        ],
        { cancelable: true }
      );
    }
  };

  const addToCartHandler = () => {
    if (user.isValid) {
      if (props.chosenColor === undefined || props.chosenSize === undefined) {
        alert("Please select SIZE and COLOR to continue");
      } else {
        // if (props.price === 0) {
        //   Alert.alert(
        //     "Product Price",
        //     "The price of this product is yet to be confirmed, you can contact us through email or contact number for further details",
        //     ["Okay"]
        //   );
        // }
        // alert(props.price);
        setButtonText("GO TO CART");
        dispatch(postCart(props._id, props.chosenColor, props.chosenSize, 1));
      }
    } else {
      Alert.alert(
        "Cannot Add To Cart",
        "You need to login first in order to add items to the cart",
        [
          {
            text: "Okay",
            style: "okay",
          },
        ],
        { cancelable: true }
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wishlistButtonContainer}>
        <TouchableOpacity
          style={styles.wishlistButton}
          onPress={wishlistHandler}
        >
          <MaterialIcons name="bookmark-border" size={25} color="black" />
          <Text style={styles.wishlistText}>{itemStatus}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.addToCartButtonContainer}>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={
            buttonText === "GO TO CART"
              ? () => navigation.navigate("Cart")
              : addToCartHandler
          }
        >
          <AntDesign name="shoppingcart" size={25} color="white" />
          <Text style={styles.addToCartText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonBar;

const styles = StyleSheet.create({
  container: {
    // borderBottomWidth: 1,
    // borderTopWidth: 1,
    height: 60,
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
