/* eslint-disable */
import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  SafeAreaView,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Popular from "./Popular";
import Categories from "./Categories";
import { myAxios } from "../../../axios";

const width = Dimensions.get("window").width;
const quote =
  "I believe in comfort. If you don't feel comfortable in your clothes, it's hard to think of anything else ~ Donna Karan";
const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [popularProducts, setPopularProducts] = useState();

  useEffect(() => {
    let mounted = true;
    myAxios
      .get("/category/popular")
      .then((res) => {
        if (mounted) {
          setIsLoading(false);
          setPopularProducts([...res.data]);
        }
      })
      .catch((err) => console.log(err));
    return () => (mounted = false);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("../../../assets/i.gif")}
            style={{ height: 100, width: 100 }}
          />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Carousel />
          <Categories navigation={navigation} />
          <TouchableOpacity
            style={styles.innerBox}
            onPress={() =>
              navigation.navigate("Catalogue", { prodId: 1, forFilters: 1 })
            }
          >
            <View>
              <ImageBackground
                source={require("../../../assets/viewAll.png")}
                style={styles.innerBox}
                blurRadius={Platform.OS === "ios" ? 3 : 2}
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
          <Popular navigation={navigation} popularProducts={popularProducts} />
          <View style={styles.footer}>
            <Text style={styles.footerText}>{quote}</Text>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
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
    marginBottom: 10,
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
  footer: {
    width: "100%",
    borderTopWidth: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
  },
  footerText: {
    color: "grey",
    padding: 10,
    textAlign: "center",
    fontStyle: "italic",
  },
});

export default Home;
