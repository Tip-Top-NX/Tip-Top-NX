import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sideImage}>
        <MaterialIcons name="menu" size={35} style={styles.materialIcon} />
      </View>
      <View style={styles.headingStyle}>
        <Text style={styles.textStyle}>TIP TOP NX</Text>
      </View>
      <View style={styles.sideImage}>
        <AntDesign name="shoppingcart" size={35} style={styles.materialIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 15,
    // borderWidth: 1,
    borderColor: "blue",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sideImage: {
    width: "15%",
    // borderWidth: 1,
    borderColor: "#000",
    height: "100%",
    justifyContent: "center",
  },
  headingStyle: {
    width: "50%",
    height: "100%",
    // borderWidth: 1,
    justifyContent: "center",
  },
  materialIcon: {
    alignSelf: "center",
    color: "#000",
  },
  textStyle: {
    fontWeight: "500",
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },
});

export default header;
