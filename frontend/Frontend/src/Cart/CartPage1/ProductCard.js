/* eslint-disable */
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import styles from "./ProductCardStyles";
import { getURL } from "../../../../axios";
import { useDispatch, useSelector } from "react-redux";
import {
  delCart,
  postWishlist,
  postCart,
} from "../../../../redux/ActionCreators";

const ProductCard = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  let SP = props.price - (props.price * props.discountPercentage) / 100;
  let totalItemPrice = props.price * props.quantity;

  const onQuantityDec = () => {
    if (props.quantity !== 1) {
      dispatch(postCart(props._id, props.color, props.size, -1));
    } else {
      dispatch(delCart(props._id, props.color, props.size));
    }
  };

  const handleWishlist = () => {
    if (user.wishlist.filter((item) => item._id === props._id).length == 0) {
      dispatch(postWishlist(props._id));
      alert(" added");
    } else {
      alert("already added");
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: getURL(props.images[0]) }}
            style={{ height: 160, width: 120 }}
          />
        </View>
        <View style={styles.detailBox}>
          <View style={styles.nameStyle}>
            <Text style={{ fontWeight: "bold" }}>{props.brand}</Text>
          </View>
          <View style={styles.nameStyle}>
            <Text style={{ fontSize: 12 }}>{props.name}</Text>
          </View>
          <View style={styles.subBox}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: 1,
                borderColor: "#ccc",
              }}
            >
              <View style={styles.smallBox}>
                <Text style={{ color: "#888", fontSize: 12 }}>SIZE : </Text>
                <Text style={{ fontWeight: "500", fontSize: 12 }}>
                  {props.size}
                </Text>
              </View>
              <View style={styles.smallBox}>
                <Text style={{ color: "#888", fontSize: 12 }}>COLOR : </Text>
                <Text style={{ fontWeight: "500", fontSize: 12 }}>
                  {props.color}
                </Text>
              </View>
            </View>
            <View style={styles.smallBox}>
              <Text style={{ color: "#888", fontSize: 12, paddingLeft: 3 }}>
                QTY :
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.minusBox}>
                  <AntDesign
                    name="minus"
                    size={20}
                    color="grey"
                    onPress={() => onQuantityDec()}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 12,
                    fontSize: 18,
                  }}
                >
                  {props.quantity}
                </Text>
                <View style={styles.plusBox}>
                  <MaterialIcons
                    name="add"
                    size={20}
                    color="grey"
                    onPress={() =>
                      dispatch(postCart(props._id, props.color, props.size, 1))
                    }
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.priceBox}>
            <Text style={styles.discountedPriceText}>
              ₹ {totalItemPrice.toFixed(2)}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View
          style={{ borderWidth: 1, padding: 2, backgroundColor: "#3A66A7" }}
        >
          <TouchableOpacity
            style={[styles.buttonBox, { backgroundColor: "#fff" }]}
            onPress={() =>
              dispatch(delCart(props._id, props.color, props.size))
            }
          >
            <MaterialIcons name="delete" size={20} color="grey" />
            <Text style={{ fontWeight: "bold" }}>REMOVE</Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderWidth: 1, padding: 2 }}>
          <TouchableOpacity
            style={[styles.buttonBox, { backgroundColor: "#3A66A7" }]}
            onPress={() => handleWishlist()}
          >
            <MaterialIcons name="bookmark-border" size={20} color="white" />
            <Text style={{ fontWeight: "bold", color: "#fff" }}>WISHLIST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
