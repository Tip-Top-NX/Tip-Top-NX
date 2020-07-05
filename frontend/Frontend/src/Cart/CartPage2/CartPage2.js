/* eslint-disable */
import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import Address from "./Address";
import PlaceOrder from "../PlaceOrder";
import { ScrollView } from "react-native-gesture-handler";
import Payment from "./Payment";

const CartPage2 = ({ navigation }) => {
  const [addressVal, setAddressVal] = useState(true);
  const [paymentVal, setPaymentVal] = useState(true);
  return (
    <SafeAreaView>
      <View style={styles.overAllContainer}>
        <ScrollView>
          <Address onAddressChange={(value) => setAddressVal(value)} />
          <Payment onPaymentChange={(value) => setPaymentVal(value)} />
        </ScrollView>
        <PlaceOrder
          leftButton="BACK"
          rightButton="PLACE ORDER"
          addressVal={addressVal}
          paymentVal={paymentVal}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default CartPage2;
const styles = StyleSheet.create({
  overAllContainer: {
    // borderWidth: 1,
    width: "100%",
    height: "100%",
    // minHeight: "100%",
  },
});
