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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.detailsBox}>
          <Text style={styles.detailsText}>
            Lorem Ipsum has been the standard dummy text ever since the 1500s
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting Lorem Ipsum has been
            the standard dummy text ever since the 1500s when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting Lorem Ipsum has been the standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting
            Lorem Ipsum has been the standard dummy text ever since the 1500s
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting Lorem Ipsum has been
            the standard dummy text ever since the 1500s when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting
          </Text>
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
    justifyContent: "center",
    padding: 25,
  },
  detailsText: {
    textAlign: "center",
    fontSize: 16,
  },
});
