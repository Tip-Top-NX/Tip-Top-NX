import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const OrderConfirmed = () => {
  const [show, setShow] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setShow("ORDER PLACED SUCCESSFULLY!");
    }, 2000);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../../../../assets/z.gif")}
        style={{ height: 300, width: 300 }}
      />
      <Text style={{ marginVertical: 20, fontWeight: "bold", fontSize: 18 }}>
        {show}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: 10,
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#888cc0",
            width: 150,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            BROWSE MORE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#888cc0",
            width: 150,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>SHOW ORDER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderConfirmed;
