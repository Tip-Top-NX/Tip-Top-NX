/* eslint-disable */
import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { getURL } from "../../../axios";
import Image from "react-native-scalable-image";

const width = Dimensions.get("window").width;

const ColorChart = ({ route }) => {
  return (
    <View style={styles.container}>
      {
        <View style={styles.imageContainer}>
          <Image
            source={
              route.params.category === 103 ||
              route.params.category === 104 ||
              route.params.category === 105 ||
              route.params.category === 106 ||
              route.params.category === 108 ||
              route.params.category === 109 ||
              route.params.category === 110 ||
              route.params.category === 111 ||
              route.params.category === 112 ||
              route.params.category === 122 ||
              route.params.category === 123 ||
              route.params.category === 124 ||
              route.params.category === 125 ||
              route.params.category === 126 ||
              route.params.category === 128 ||
              route.params.category === 129 ||
              route.params.category === 130 ||
              route.params.category === 131 ||
              route.params.category === 132 ||
              route.params.category === 133 ||
              route.params.category === 134 ||
              route.params.category === 135
                ? {
                    uri: getURL(route.params.images[route.params.length - 2]),
                  }
                : {
                    uri: getURL(route.params.images[route.params.length - 1]),
                  }
            }
            width={width}
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
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 10,
  },
});
