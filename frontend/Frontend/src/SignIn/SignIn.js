/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  Image,
  SafeAreaView,
} from "react-native";
import styles from "./SignInStyles";
import PropTypes from "prop-types";
import { Feather } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import { signin, signinFailed } from "../../../redux/ActionCreators";

const signIn = ({ navigation }) => {
  // states for handling the input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  // states for style change if not valid
  const [validEmail, checkEmail] = useState(true);
  const [validPassword, checkPassword] = useState(true);

  // redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    user.isValid = false;
    dispatch(signinFailed());
  }, []);

  useEffect(() => {
    if (user.isValid) {
      navigation.navigate("Home");
    }
  }, [user.isValid]);

  const validation = () => {
    // console.log("start",validEmail,validPassword);
    const emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let valid = true;
    // email check
    if (email == "") {
      checkEmail(false);
      valid = false;
    } else if (!emailregex.test(email)) {
      checkEmail(false);
      valid = false;
    } else {
      checkEmail(true);
    }
    // password check
    if (password == "" || password.length < 6) {
      checkPassword(false);
      valid = false;
      setPassword("");
    } else {
      checkPassword(true);
    }
    if (valid) {
      dispatch(
        signin({
          email,
          password,
        })
      );
    }
  };

  const HandlePasswordField = () => {
    return showPassword ? (
      <Feather
        name="eye-off"
        size={24}
        color="black"
        style={{ alignSelf: "center" }}
        onPress={() => setShowPassword(false)}
      />
    ) : (
      <Feather
        name="eye"
        size={24}
        color="black"
        style={{ alignSelf: "center" }}
        onPress={() => setShowPassword(true)}
      />
    );
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          {/* <Splash visible={user.isFetching} /> */}
          {user.isFetching ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                source={require("../../../assets/q.gif")}
                style={{ height: 100, width: 100 }}
              />
            </View>
          ) : (
            <ImageBackground
              source={require("../../../assets/background.jpg")}
              style={{
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center",
                width: "100%",
              }}
              blurRadius={0}
            >
              <TouchableOpacity
                style={[
                  styles.button,
                  {
                    width: 100,
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    alignSelf: "flex-end",
                  },
                ]}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.buttonText}>SKIP</Text>
              </TouchableOpacity>
              <View style={styles.title}>
                <Text style={styles.textStyle}>SIGN IN</Text>
                <Text style={styles.textStyle}>TO CONTINUE</Text>
              </View>
              <View
                style={[
                  styles.inputContainer,
                  !validEmail ? styles.error : null,
                ]}
              >
                <TextInput
                  style={styles.inputText}
                  placeholder="EMAIL ADDRESS"
                  placeholderTextColor="#666"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                ></TextInput>
              </View>
              <View
                style={[
                  styles.inputContainerPass,
                  !validPassword ? styles.error : null,
                ]}
              >
                <TextInput
                  style={styles.inputTextPass}
                  placeholder="PASSWORD"
                  placeholderTextColor="#666"
                  secureTextEntry={showPassword}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                ></TextInput>
                <HandlePasswordField />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("Get Email")}
              >
                <Text style={styles.forgotPwd}>FORGOT PASSWORD?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => validation()}
              >
                <Text style={styles.buttonText}>BEGIN</Text>
              </TouchableOpacity>
              <View style={styles.signUpBox}>
                <Text style={styles.signUpText}>NOT A MEMBER YET ?</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    navigation.reset({
                      index: 0,
                      routes: [{ name: "Sign Up" }],
                    })
                  }
                >
                  <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

signIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default signIn;
