import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Address from "./Address";
import PlaceOrderTab from "../PlaceOrder";
import { ScrollView } from "react-native-gesture-handler";
import Payment from "./Payment";

const CartPage2 = () => {
  const [addressVal, setAddressVal] = useState(true);
  const [paymentVal, setPaymentVal] = useState(true);
  return (
    <View style={styles.overAllContainer}>
      <ScrollView>
        <Address onAddressChange={(value) => setAddressVal(value)} />
        <Payment onPaymentChange={(value) => setPaymentVal(value)} />
      </ScrollView>
      <PlaceOrderTab
        leftButton="BACK"
        rightButton="PLACE ORDER"
        addressVal={addressVal}
        paymentVal={paymentVal}
      />
    </View>
  );
};

export default CartPage2;
const styles = StyleSheet.create({
  overAllContainer: {
    // borderWidth: 1,
    width: "100%",
    minHeight: "100%",
  },
});
