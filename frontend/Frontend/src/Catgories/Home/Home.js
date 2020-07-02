/* eslint-disable */
import React from "react";
import Carousel from "./Carousel";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Popular from "./Popular";
import Categories from "./Categories";

const width = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel />
        <Categories navigation={navigation} />
        <TouchableOpacity
          style={styles.innerBox}
          onPress={() => navigation.navigate("Catelogue")}
        >
          <View>
            <ImageBackground
              source={require("../../../../assets/e.jpg")}
              style={styles.innerBox}
              blurRadius={4}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: 35,
                  letterSpacing: 15,
                }}
              >
                VIEW ALL
              </Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
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

  innerBox: {
    width: width,
    height: 280,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "silver",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
    alignSelf: "center",
  },
  imageStyle: {
    // borderWidth: 1,
    height: 255,
    width: width,
    alignSelf: "center",
  },
});

export default Home;
