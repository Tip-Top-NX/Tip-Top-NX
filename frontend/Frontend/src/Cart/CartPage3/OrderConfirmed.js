import React, { useEffect, useState } from "react";
import { View, Text, Image, BackHandler } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const OrderConfirmed = ({ navigation }) => {
  const [showText, setShowText] = useState("");
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText("ORDER PLACED SUCCESSFULLY!");
    }, 3000);
  });

  useEffect(() => {
    setTimeout(() => {
      setShowButtons(true);
    }, 5500);
  });

  const backAction = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

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
        source={require("../../../../assets/orderPlaced.gif")}
        style={{ height: 300, width: 300 }}
      />
      <Text style={{ marginVertical: 20, fontWeight: "bold", fontSize: 18 }}>
        {showText}
      </Text>
      {showButtons === true ? (
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
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: "Home" }],
              })
            }
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
            onPress={() => {
              navigation.navigate("Orders", { screen: "My Orders" }),
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Cart" }],
                });
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              SHOW ORDER
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default OrderConfirmed;
