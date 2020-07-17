/* eslint-disable */
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { getURL } from "../../../axios";

const ColorChart = ({ route }) => {
  return (
    <View style={styles.container}>
      {
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: getURL(route.params.sizeChart[1]) }}
            style={styles.imageStyle}
          />
        </View>
      }
    </View>
  );
};

export default ColorChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
  },
  imageStyle: {
    aspectRatio: 3 / 1,
    width: "100%",
  },
  imageContainer: {
    width: "90%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
