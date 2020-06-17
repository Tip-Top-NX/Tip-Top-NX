/* eslint-disable */
import React from "react";
import Carousel from "./Carousel";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 30 }}>
          <Carousel />
        </View>

        <View>
          <View style={[styles.outerBox, { marginTop: 15 }]}>
            <TouchableOpacity
              style={styles.innerBox}
              onPress={() => navigation.navigate("Sub-Categories1")}
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
              onPress={() => navigation.navigate("Sub-Categories1")}
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
              onPress={() => navigation.navigate("Sub-Categories1")}
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
              onPress={() => navigation.navigate("Sub-Categories1")}
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
          {/* <TouchableOpacity style={styles.popular}>
            <Text style={styles.textStyle}>POPULAR PRODUCTS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.popular, { backgroundColor: "grey" }]}
          >
            <Text style={styles.textStyle}>SEASONAL PRODUCTS</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#000",
  },
  innerBox: {
    width: 180,
    height: 280,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  outerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    shadowOpacity: 0.2,
    marginTop: 5,
  },
  compartment: {
    marginTop: 10,
    // borderWidth: 1,
  },
  imageStyle: {
    // borderWidth: 1,
    borderRadius: 30,
  },
  popular: {
    marginTop: 10,
    width: "100%",
    height: 100,
    backgroundColor: "silver",
    justifyContent: "center",
    borderRadius: 5,
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Home;
