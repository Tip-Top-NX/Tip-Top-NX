/* eslint-disable */
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { getURL } from "../../../axios";

const SizeChart = ({ route }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: getURL(route.params.sizeChart) }}
        style={styles.imageStyle}
      ></Image>
    </View>
  );
};

export default SizeChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    borderWidth: 5,
    borderColor: "grey",
    alignSelf: "center",
    width: "90%",
    aspectRatio: 5 / 2,
    marginBottom: 10,
    marginTop: 10,
  },
});
