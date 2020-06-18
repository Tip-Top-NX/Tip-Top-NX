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
          style={{
            height: 50,
            backgroundColor: "teal",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Temporary Profile Page
          </Text>
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
  textStyle: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default Home;
