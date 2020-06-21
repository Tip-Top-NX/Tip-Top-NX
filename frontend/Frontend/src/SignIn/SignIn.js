/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage,
  ImageBackground,
} from "react-native";
import styles from "./SignInStyles";
import PropTypes from "prop-types";
import axios from 'axios';

import { useSelector, useDispatch } from "react-redux";
import { signin, signinFailed, test } from "../../../redux/ActionCreators";
import { myAxios } from '../../../axios';
// const fs = require('fs');
// aCrt = fs.readFileSync('./cert.pem');

// const httpsAgent = new https.Agent({ ca: caCrt, keepAlive: false });

const signIn = ({ navigation }) => {
  // states for handling the input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // states for style change if not valid
  const [validEmail, checkEmail] = useState(true);
  const [validPassword, checkPassword] = useState(true);

  // redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    // myAxios.get('/',{httpsAgent:httpsAgent})
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
    user.isValid = false;
    dispatch(signinFailed());
  }, []);

  useEffect(() => {
    if (user.isValid) {
      navigation.navigate("Categories");
    }
  }, [user.isValid]);

  const validation = () => {
    const emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    // email check
    if (email == "") {
      checkEmail(false);
    } else if (!emailregex.test(email)) {
      checkEmail(false);
      //   alert("Please enter a valid email address");
    } else {
      checkEmail(true);
    }
    // password check
    if (password == "" || password.length < 6) {
      checkPassword(false);
      //   alert("The length of the password should be atleast 6");
      setPassword("");
    } else {
      checkPassword(true);
    }
    if (validEmail && validPassword) {
      dispatch(
        signin({
          email,
          password,
        })
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
          <View style={styles.title}>
            <Text style={styles.textStyle}>SIGN IN</Text>
            <Text style={styles.textStyle}>TO CONTINUE</Text>
          </View>
          <View
            style={[styles.inputContainer, !validEmail ? styles.error : null]}
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
              styles.inputContainer,
              !validPassword ? styles.error : null,
            ]}
          >
            <TextInput
              style={styles.inputText}
              placeholder="PASSWORD"
              placeholderTextColor="#666"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            ></TextInput>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => validation()}>
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
      </View>
    </TouchableWithoutFeedback>
  );
};

signIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default signIn;
