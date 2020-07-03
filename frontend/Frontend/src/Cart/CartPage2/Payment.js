/* eslint-disable */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const Payment = (props) => {
  const [selected, setSelected] = useState(true);

  useEffect(() => {
    props.onPaymentChange(selected);
  }, [selected]);

  return (
    <View style={styles.container}>
      <View style={styles.addressHeader}>
        <Text style={styles.headerText}>PAYMENT</Text>
      </View>
      <View style={styles.addressBox}>
        <TouchableOpacity
          style={styles.selectedBox}
          onPress={() => setSelected(!selected)}
        >
          <View
            style={[selected ? styles.selected : styles.notSelected]}
          ></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addressTextBox}
          onPress={() => setSelected(!selected)}
        >
          <Text style={styles.addressStyle}>CASH ON DELIVERY (COD)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flex: 1,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    elevation: 5,
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  addressHeader: {
    width: "95%",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    paddingLeft: 10,
  },
  headerText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 12,
  },
  addressBox: {
    width: "95%",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10,
  },
  selectedBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notSelected: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
  },
  selected: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#3A66A7",
  },
  addressTextBox: {
    // borderWidth: 1,
    width: "80%",
    padding: 8,
    paddingVertical: 10,
  },
  addressStyle: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.2,
  },
});
