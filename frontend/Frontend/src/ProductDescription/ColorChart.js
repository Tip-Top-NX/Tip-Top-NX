/* eslint-disable */
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { getURL } from "../../../axios";
import { ScrollView } from "react-native-gesture-handler";

const ColorChart = ({ route }) => {
  return (
    <ScrollView horizontal={true}>
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
    </ScrollView>
  );
};

export default ColorChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageStyle: {
    height: 220,
    width: 600,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
