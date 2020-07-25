import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const header = (props) => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.sideImage}>
        <MaterialIcons
          name="menu"
          size={26}
          style={[styles.materialIcon, { alignSelf: "center" }]}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </View>
      <View style={styles.sideImage} />
      <View style={styles.headingStyle}>
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>

      <View style={styles.sideImage}>
        {props.showRight ? (
          <Feather
            name="search"
            style={[styles.materialIcon, { alignSelf: "flex-end" }]}
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate("Search");
            }}
          />
        ) : null}
      </View>

      <View style={styles.sideImage}>
        {props.showRight ? (
          <View>
            <AntDesign
              name="shoppingcart"
              size={24}
              style={styles.materialIcon}
              onPress={() => navigation.navigate("Cart")}
            />
            {user.isValid ? (
              <TouchableOpacity
                style={styles.counterStyle}
                onPress={() => navigation.navigate("Cart")}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {user.cart.length}
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    width: "45%",
    height: "100%",
    // borderWidth: 1,
    justifyContent: "center",
    marginHorizontal: 15,
    alignItems: "center",
  },
  materialIcon: {
    alignSelf: "center",
    color: "#000",
  },
  textStyle: {
    fontWeight: "600",
    fontSize: 17,
    color: "#000",
    textAlign: "center",
  },
  counterStyle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "absolute",
    top: -3,
    right: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default header;
