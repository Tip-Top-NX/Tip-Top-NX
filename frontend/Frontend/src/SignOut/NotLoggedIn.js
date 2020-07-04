/* eslint-disable */
import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

const NotLoggedIn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/b1.jpg")}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          width: "100%",
        }}
        blurRadius={0}
      >
        <Entypo
          name="emoji-sad"
          size={60}
          color="black"
          style={{ alignSelf: "center" }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 65,
            fontWeight: "bold",
            marginBottom: 80,
            letterSpacing: 0.5,
            marginTop: 20,
          }}
        >
          OOPS!
        </Text>

        <View style={styles.buttonContainer}>
          <Text style={{ textAlign: "center", marginTop: 60 }}>
            SORRY, YOU NEED TO LOGIN FIRST
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Sign Up | Log In")}
          >
            <Text style={{ fontSize: 18 }}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
  },
  button: {
    marginTop: 20,
    width: 200,
    height: 50,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 2,
  },
  buttonContainer: {
    width: 250,
    alignSelf: "center",
    marginBottom: 80,
  },
});

export default NotLoggedIn;
