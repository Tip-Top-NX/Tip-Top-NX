/* eslint-disable */
import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const width = Dimensions.get("window").width;

const Categories = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.outerBox}>
          <TouchableOpacity
            style={styles.innerBox}
            onPress={() => props.navigation.navigate("Catalogue")}
          >
            <View>
              <Image
                source={require("../../../assets/v.gif")}
                style={styles.imageStyle}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBox}
            onPress={() => props.navigation.navigate("Catalogue")}
          >
            <View>
              <Image
                source={require("../../../assets/t.gif")}
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
            onPress={() => props.navigation.navigate("Catalogue")}
          >
            <View>
              <Image
                source={require("../../../assets/g.gif")}
                style={styles.imageStyle}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerBox}
            onPress={() => props.navigation.navigate("Catalogue")}
          >
            <View>
              <Image
                source={require("../../../assets/n.jpg")}
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
    backgroundColor: "#fff",
    marginBottom: 10,
    justifyContent: "center",
  },
  outerBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    shadowOpacity: 0.2,
    // marginTop: 5,
  },
  innerBox: {
    width: width / 2 - 20,
    height: 255,
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "silver",
    // shadowOpacity: 0.5,
    // shadowOffset: { width: 1, height: 1 },
    // shadowRadius: 4,
    // elevation: 4,
    marginHorizontal: 5,
    marginVertical: 12.5,
    // borderRadius: 30,
    // borderWidth: 1,
    // borderColor: "#ccc",
    // borderRadius: 30,
    // backgroundColor: "silver",
  },
  imageStyle: {
    borderWidth: 1,
    borderRadius: 30,
    height: 255,
    width: width / 2 - 20,
  },
});

export default Categories;
