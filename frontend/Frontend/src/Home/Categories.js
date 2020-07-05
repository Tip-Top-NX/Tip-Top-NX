/* eslint-disable */
import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
} from "react-native";

const width = Dimensions.get("window").width;

const Categories = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.outerBox}>
          <TouchableOpacity
            style={styles.innerBox}
            onPress={() =>
              props.navigation.navigate("Catalogue", { prodId: 2 })
            }
          >
            <Image
              source={require("../../../assets/v.gif")}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBox}
            // onPress={() => props.navigation.navigate("Catalogue")}
            onPress={() => alert("Women's section is under development")}
          >
            <Image
              source={require("../../../assets/t.gif")}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.outerBox}>
          <TouchableOpacity
            style={styles.innerBox}
            // onPress={() => props.navigation.navigate("Catalogue")}
            onPress={() => alert("Kids Section is under development")}
          >
            <Image
              source={require("../../../assets/g.gif")}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBox}
            // onPress={() => props.navigation.navigate("Catalogue")}
            onPress={() => alert("Accessories is under development")}
          >
            <Image
              source={require("../../../assets/n.jpg")}
              style={styles.imageStyle}
            />
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
    backgroundColor: "#fff",
    marginBottom: 10,
    justifyContent: "center",
  },
  outerBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  innerBox: {
    width: width / 2 - 20,
    height: 255,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 12.5,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 0.1,
  },
  imageStyle: {
    height: 255,
    width: width / 2 - 20,
    ...Platform.select({
      ios: {
        borderRadius: 30,
      },
      android: {
        borderRadius: 0,
      },
    }),
  },
});

export default Categories;
