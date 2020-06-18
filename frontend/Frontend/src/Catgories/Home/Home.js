/* eslint-disable */
import React from "react";
import Carousel from "./Carousel";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Popular from "./Popular";
import Categories from "./Categories";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel />
        <TouchableOpacity
          style={styles.viewAll}
          onPress={() => navigation.navigate("Catelogue")}
        >
          <Text style={styles.textStyle}>VIEW ALL ITEMS</Text>
        </TouchableOpacity>
        <Categories navigation={navigation} />
        <Popular navigation={navigation} />
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
    backgroundColor: "#fff",
  },

  compartment: {
    marginTop: 10,
    // borderWidth: 1,
  },

  popular: {
    marginTop: 10,
    width: "100%",
    height: 100,
    backgroundColor: "silver",
    justifyContent: "center",
    borderRadius: 5,
  },
  viewAll: {
    height: 50,
    backgroundColor: "#96CDCD",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textStyle: {
    color: "#00688B",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.3,
  },
});

export default Home;
