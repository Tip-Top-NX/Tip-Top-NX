/* eslint-disable */
import React from "react";
import { StyleSheet, View, Dimensions, ImageBackground } from "react-native";
import Picture from "./Picture";
import Options from "./Options";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/back1.jpg")}
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
        blurRadius={0}
      >
        <Picture />
        <Options />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
    flex: 1,
    height: 600,
    // backgroundColor: "#fff",
  },
});

export default Profile;
