import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.sideImage}>
        <MaterialIcons
          name="menu"
          size={30}
          style={[styles.materialIcon, { alignSelf: "center" }]}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </View>
      <View style={styles.headingStyle}>
        <Text style={styles.textStyle}>TIP TOP NX</Text>
      </View>

      <View style={styles.sideImage}>
        <Feather
          name="search"
          style={styles.materialIcon}
          size={30}
          color="black"
          onPress={() => {
            navigation.navigate("Search");
          }}
        />
      </View>

      <View style={styles.sideImage}>
        <AntDesign name="shoppingcart" size={30} style={styles.materialIcon} />
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
    justifyContent: "space-evenly",
  },
  sideImage: {
    width: "15%",
    // borderWidth: 1,
    borderColor: "#000",
    height: "100%",
    justifyContent: "center",
    marginHorizontal: 15,
  },
  headingStyle: {
    width: "60%",
    height: "100%",
    // borderWidth: 1,
    justifyContent: "center",
    marginHorizontal: 15,
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