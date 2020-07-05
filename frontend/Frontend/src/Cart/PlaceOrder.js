/* eslint-disable */
import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { useDispatch } from "react-redux";
import { placeOrder } from "../../../redux/ActionCreators";

const PlaceOrderTab = (props) => {
  const dispatch = useDispatch();
  const handleRightButton = () => {
    if (props.rightButton === "NEXT") {
      props.navigation.navigate("Address and Payment");
    } else {
      if (props.addressVal && props.paymentVal) {
        dispatch(placeOrder("COD"));
        props.navigation.reset({
          index: 0,
          routes: [{ name: "OrderConfirm" }],
        });
      } else {
        alert("Cannot leave address or payment empty");
      }
    }
  };
  return (
    <View style={styles.placeOrderTab}>
      <TouchableOpacity
        style={[styles.buttonBox, { backgroundColor: "#fff", borderWidth: 1 }]}
        onPress={() => {
          props.leftButton === "BACK"
            ? props.navigation.goBack()
            : props.navigation.navigate("Home");
        }}
      >
        <Text style={[styles.buttonText, { color: "#000" }]}>
          {props.leftButton}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonBox}
        onPress={() => handleRightButton()}
      >
        <Text style={styles.buttonText}>{props.rightButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlaceOrderTab;

const styles = StyleSheet.create({
  placeOrderTab: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  buttonBox: {
    width: 170,
    height: 50,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C2185B",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
