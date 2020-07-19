/* eslint-disable */
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { getURL } from "../../../axios";
import { useNavigation } from "@react-navigation/native";
import Image from "react-native-scalable-image";

const SizeChart = ({ route }) => {
  const navigation = useNavigation();
  let getString = route.params.images[route.params.images.length - 1].split(
    "/"
  );

  return (
    <View style={styles.container}>
      {
        <View style={styles.imageContainer}>
          {getString[getString.length - 1] === "size.png" ? (
            <Image
              source={{ uri: getURL(route.params.images[2]) }}
              width={Dimensions.get("window").width * 0.9}
            />
          ) : route.params.category === 31 ||
            route.params.category === 32 ||
            route.params.category === 33 ||
            route.params.category === 11 ||
            route.params.category === 12 ||
            route.params.category === 14 ||
            route.params.category === 13 ? (
            <Image
              source={require("../../../assets/menTop.png")}
              width={Dimensions.get("window").width * 0.9}
            />
          ) : route.params.category === 37 ||
            route.params.category === 36 ||
            route.params.category === 35 ||
            route.params.category === 34 ? (
            <Image
              source={require("../../../assets/menBottom.png")}
              width={Dimensions.get("window").width * 0.9}
            />
          ) : (
            (alert("The size chart of this product is currently not available"),
            navigation.goBack())
          )}
        </View>
      }
    </View>
  );
};

export default SizeChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: 20,
  },
});
