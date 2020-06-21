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

import { signinFailed } from "../../../redux/ActionCreators";
import { useSelector, useDispatch } from "react-redux";

const LogOut = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(signinFailed());
  }, []);

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
            fontSize: 60,
            fontWeight: "bold",
            marginBottom: 60,
            letterSpacing: 0.5,
            marginTop: 20,
          }}
        >
          LOGGED OUT!
        </Text>
        <View style={styles.buttonContainer}>
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
    marginTop: 70,
    marginBottom: 50,
  },
});

export default LogOut;
