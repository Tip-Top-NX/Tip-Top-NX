/* eslint-disable */
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
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
        <Text
          style={{
            textAlign: "center",
            fontSize: 65,
            fontWeight: "bold",
            marginBottom: 60,
            letterSpacing: 0.5,
          }}
        >
          OOPS!
        </Text>
        <Text style={{ textAlign: "center", marginTop: 60 }}>
          YOU HAVE NOT LOGGED IN
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Sign Up | Log In")}
        >
          <Text style={{ fontSize: 18 }}>LOG IN</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginTop: 20 }}>TO CONTINUE</Text>
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
});

export default NotLoggedIn;
