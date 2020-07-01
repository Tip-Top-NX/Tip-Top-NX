/* eslint-disable */
import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PlaceOrderTab = (props) => {
  const navigation = useNavigation();
  const handleRightButton = () => {
    if (props.rightButton === "NEXT") {
      navigation.navigate("CartPage2");
    } else {
      props.addressVal && props.paymentVal
        ? navigation.navigate("Categories")
        : alert("Cannot leave address or payment empty");
    }
  };
  return (
    <View style={styles.placeOrderTab}>
      <TouchableOpacity
        style={[styles.buttonBox, { backgroundColor: "#fff", borderWidth: 1 }]}
        onPress={() => {
          props.leftButton === "BACK"
            ? navigation.goBack()
            : navigation.navigate("Catelogue");
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
