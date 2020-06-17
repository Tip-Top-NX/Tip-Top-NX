/* eslint-disable */
import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

const Categories = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={[styles.outerBox, { marginTop: 15 }]}>
          <TouchableOpacity
            style={styles.innerBox}
            onPress={() => props.navigation.navigate("Catelogue")}
          >
            <View>
              {/* <Text>Men</Text> */}
              <Image
                source={require("../../../../assets/man.png")}
                style={styles.imageStyle}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBox}
            onPress={() => props.navigation.navigate("Catelogue")}
          >
            <View>
              {/* <Text>Women</Text> */}
              <Image
                source={require("../../../../assets/women.png")}
                style={styles.imageStyle}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.outerBox}>
          <TouchableOpacity
            style={styles.innerBox}
            onPress={() => props.navigation.navigate("Catelogue")}
          >
            <View>
              {/* <Text>Men</Text> */}
              <Image
                source={require("../../../../assets/kid.png")}
                style={styles.imageStyle}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBox}
            onPress={() => props.navigation.navigate("Catelogue")}
          >
            <View>
              {/* <Text>Women</Text> */}
              <Image
                source={require("../../../../assets/towel.jpg")}
                style={styles.imageStyle}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 600,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "silver",
    marginTop: 10,
  },
  outerBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    shadowOpacity: 0.2,
    marginTop: 5,
  },
  innerBox: {
    width: 180,
    height: 280,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    // borderWidth: 1,
    borderRadius: 30,
  },
});

export default Categories;
