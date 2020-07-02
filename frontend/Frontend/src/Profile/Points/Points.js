import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";

const Points = () => {
  const user = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <View style={styles.headingBox}>
        <Text style={styles.headingText}>YOU HAVE EARNED</Text>
      </View>
      <View style={styles.pointBox}>
        <Text style={styles.pointStyle}>{user.points}</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}>
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
            <Text style={[styles.subTitleText, { color: "#888" }]}>
              HOW DOES THIS WORK
            </Text>
          </View>
          <View style={styles.subTitleBox}>
            <Text style={styles.subTitleText}>SHOP AND EARN</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={[styles.textBox, { borderBottomWidth: 0 }]}>
              1] On every purchase, 10% of your cart total will be awarded you
              as Points
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.exampleText}>
              For example: On a purchase of Rs 1000 you earn a total of 100
              points.
            </Text>
          </View>
          <View style={[styles.textBox, { borderBottomWidth: 0 }]}>
            <Text style={styles.textStyle}>
              2] Once you have collected a minimum of 500 points,you are
              entitled to a discount amounting to the number of points you have
              collected.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.exampleText}>
              For example:If the number of points collected by you is:510, you
              are entitled to a dicount of Rs.510. Disclaimer:This discount can
              only be availed on an in-store purchase of minimum Rs.2000.
            </Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.exampleText}>
              For example:If the number of points collected by you is:510, you
              are entitled to a dicount of Rs.510. Disclaimer:This discount can
              only be availed on an in-store purchase of minimum Rs.2000.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
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
    backgroundColor: "silver",
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
    backgroundColor: "grey",
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
    borderColor: "#ccc",
    paddingVertical: 10,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  textStyle: {
    fontSize: 14,
  },
  exampleText: {
    fontSize: 13,
    color: "#376439",
  },
});
