import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./SignInStyles";
import PropTypes from "prop-types";

import { useSelector, useDispatch } from "react-redux";
import { signin, signinFailed } from '../../../redux/ActionCreators';


const signIn = ({ navigation }) => {
  // states for handling the input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // states for style change if not valid
  const [validEmail, checkEmail] = useState(true);
  const [validPassword, checkPassword] = useState(true);

  // redux
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signinFailed());
  }, [])
  
  useEffect(() => {
    if(user.isValid){
      navigation.navigate("Home");
    }
  }, [user.isValid])

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
    if(validEmail && validPassword){
      dispatch(signin({
        email,
        password
      }));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
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
          style={[styles.inputContainer, !validPassword ? styles.error : null]}
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
            onPress={() => navigation.navigate("Sign Up")}
          >
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
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
