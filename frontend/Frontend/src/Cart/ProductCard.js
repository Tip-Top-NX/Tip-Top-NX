/* eslint-disable */
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ProductCard = (props) => {
  const [quantity, setQuantity] = useState("1");
  let SP = props.price - (props.price * props.discountPercentage) / 100;
  let totalItemPrice = SP * quantity;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imageContainer}></View>
        <View style={styles.detailBox}>
          <View style={styles.nameStyle}>
            <Text style={{ fontWeight: "bold" }}>
              {props.brand.toUpperCase()}
            </Text>
          </View>
          <View style={styles.nameStyle}>
            <Text style={{ fontSize: 12 }}>{props.name.toUpperCase()}</Text>
          </View>
          <View style={styles.subBox}>
            <View style={styles.smallBox}>
              <Text style={{ color: "#888" }}>SIZE : </Text>
              <Text style={{ fontWeight: "500", fontSize: 18 }}>
                {props.size}
              </Text>
            </View>
            <View style={styles.smallBox}>
              <Text style={{ color: "#888" }}>QTY : </Text>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    borderWidth: 1,
                    width: 22,
                    height: 22,
                    marginHorizontal: 5,
                    borderRadius: 11,
                    // borderColor: "red",
                  }}
                >
                  <AntDesign
                    name="minus"
                    size={20}
                    // color="red"
                    onPress={() => setQuantity(quantity - 1)}
                  />
                </View>
                <Text
                  style={{
                    marginHorizontal: 12,
                    fontSize: 18,
                  }}
                >
                  {quantity}
                </Text>
                <View
                  style={{
                    borderWidth: 1,
                    width: 22,
                    height: 22,
                    marginHorizontal: 5,
                    borderRadius: 11,
                    // borderColor: "green",
                  }}
                >
                  <MaterialIcons
                    name="add"
                    size={20}
                    // color="green"
                    onPress={() => setQuantity(parseInt(quantity) + 1)}
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
        <TouchableOpacity style={styles.buttonBox}></TouchableOpacity>
        <TouchableOpacity style={styles.buttonBox}></TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    width: 350,
    borderWidth: 1,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imageContainer: {
    height: 160,
    width: 120,
    borderWidth: 1,
    alignSelf: "center",
    marginRight: 10,
  },
  detailBox: {
    borderWidth: 1,
    height: 190,
    width: 200,
    alignItems: "center",
    paddingVertical: 5,
  },
  nameStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: "90%",
    paddingVertical: 3,
    paddingHorizontal: 5,
    margin: 3,
  },
  subBox: {
    justifyContent: "space-evenly",
    borderWidth: 1,
    width: "90%",
    margin: 2,
  },
  smallBox: {
    marginVertical: 5,
    alignItems: "center",
    borderWidth: 1,
    paddingVertical: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
  },
  priceBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: "90%",
    paddingVertical: 3,
    paddingHorizontal: 5,
    margin: 5,
  },
  discountedPriceText: {
    fontSize: 15,
    marginHorizontal: 8,
    fontWeight: "bold",
    color: "#444",
  },
  buttonContainer: {
    width: 350,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  buttonBox: {
    width: 150,
    height: 50,
    borderWidth: 1,
    padding: 5,
  },
});
