import React from "react";
import { StyleSheet, View } from "react-native";
import Picture from "./Picture";
import Options from "./Options";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Picture />
      <Options />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 30,
    flex: 1,
    height: 600,
    // backgroundColor: "#fff",
  },
});

export default Profile;
