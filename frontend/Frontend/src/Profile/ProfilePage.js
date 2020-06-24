/* eslint-disable */
import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Text,
} from "react-native";
import Picture from "./ProfilePage/Picture";
import Options from "./ProfilePage/Options";
import { useSelector } from "react-redux";
import NotLoggedIn from "../SignOut/NotLoggedIn";

const Profile = () => {
  const user = useSelector((state) => state.user);
  if (user.isValid) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../assets/back.jpg")}
          style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
          blurRadius={0}
        >
          <Picture />
          <Options />
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <NotLoggedIn />
      </View>
    );
  }
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
