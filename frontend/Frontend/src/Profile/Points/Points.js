import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useSelector } from "react-redux";

const Points = () => {
  const user = useSelector((state) => state.user);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../../../assets/p.jpg")}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          width: "100%",
        }}
        blurRadius={0}
      >
        <View style={styles.headingBox}>
          <Text style={styles.headingText}>YOU HAVE EARNED</Text>
        </View>
        <View style={styles.pointBox}>
          <Text style={styles.pointStyle}>{user.points}</Text>
          <Text
            style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
          >
            Points
          </Text>
        </View>

        <View style={{ height: 85 }}></View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: "100%", marginBottom: 15 }}
        >
          <View style={styles.detailsBox}>
            <View style={styles.subTitleBox}>
              <Text style={[styles.subTitleText, { color: "#00688B" }]}>
                HOW DOES THIS WORK
              </Text>
            </View>
            <View style={styles.subTitleBox}>
              <Text
                style={[
                  styles.subTitleText,
                  { color: "#0D4F8B", fontWeight: "bold" },
                ]}
              >
                SHOP AND EARN
              </Text>
            </View>
            <View style={[styles.textBox, { borderBottomWidth: 0 }]}>
              <Text style={styles.textStyle}>
                1] Get a 10% of bonus points on every purchase you make.
              </Text>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.exampleText}>
                For example : On a purchase of Rs 1000 you earn a total of 100
                points.
              </Text>
            </View>
            <View style={[styles.textBox, { borderBottomWidth: 0 }]}>
              <Text style={styles.textStyle}>
                2] Once you have collected a minimum of 500 points, you are
                entitled to a discount amounting to the number of points you
                have collected.
              </Text>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.exampleText}>
                For example : If the number of points collected by you is : 510,
                you are entitled to a dicount of Rs.510.
              </Text>
            </View>
            <View style={styles.tipStyle}>
              <Text
                style={{ fontSize: 15, fontWeight: "500", color: "skyblue" }}
              >
                *** This discount can only be availed on an in-store purchase of
                minimum Rs.2000 ***
              </Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Points;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // borderWidth: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headingBox: {
    height: 160,
    width: "100%",
    // borderWidth: 1,
    alignSelf: "center",
    paddingTop: 30,
    // backgroundColor: "silver",
  },
  headingText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
  pointBox: {
    position: "absolute",
    top: 80,
    borderWidth: 1,
    borderRadius: 75,
    height: 150,
    width: 150,
    alignSelf: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    // backgroundColor: "grey",
  },
  pointStyle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 35,
    letterSpacing: 1.8,
  },
  detailsBox: {
    width: "100%",
    // borderWidth: 1,
    paddingHorizontal: 10,
  },
  subTitleBox: {
    // borderWidth: 1,
    paddingVertical: 15,
    justifyContent: "center",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  subTitleText: {
    fontWeight: "500",
    fontSize: 17,
  },
  textBox: {
    borderBottomWidth: 1,
    borderColor: "#05B8CC",
    paddingVertical: 10,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "500",
  },
  exampleText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#36648B",
  },
  tipStyle: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 15,
    justifyContent: "center",
    paddingLeft: 20,
    backgroundColor: "#104E8B",
    shadowColor: "blue",
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    elevation: 5,
    marginTop: 30,
  },
});
