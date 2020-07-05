/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import styles from "./SignUpStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useSelector, useDispatch } from "react-redux";
import { signup, signinFailed } from "../../../redux/ActionCreators";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const signUp = () => {
  const navigation = useNavigation();
  // states for handling the input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  // states for style change if not valid
  const [validName, checkName] = useState(true);
  const [validEmail, checkEmail] = useState(true);
  const [validPassword, checkPassword] = useState(true);
  const [validPhone, checkPhone] = useState(true);

  // redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signinFailed());
  }, []);

  useEffect(() => {
    if (user.isValid) {
      navigation.navigate("Home");
    }
  }, [user.isValid]);

  const validation = () => {
    const emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const alph = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;

    // name check
    if (name == "") {
      checkName(false);
    } else if (!alph.test(name)) {
      checkName(false);
      // alert("Please enter a valid name");
    } else {
      checkName(true);
    }
    // email check
    if (email == "") {
      checkEmail(false);
    } else if (!emailregex.test(email)) {
      checkEmail(false);
      // alert("Please enter a valid email address");
    } else {
      checkEmail(true);
    }
    // password check
    if (password == "" || password.length < 6) {
      checkPassword(false);
      // alert("The length of the password should be atleast 6");
      setPassword("");
    } else {
      checkPassword(true);
    }
    // phone number check
    if (phone == "" || phone.length !== 10 || phone.charAt(0) < 7) {
      checkPhone(false);
    } else {
      checkPhone(true);
    }

    if (validEmail && validName && validPassword && validPhone) {
      dispatch(
        signup({
          name,
          email,
          password,
          contact: phone,
        })
      );
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView scrollEnabled={true}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <ImageBackground
              source={require("../../../assets/b1.jpg")}
              style={{
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
              blurRadius={0}
            >
              <View style={styles.title}>
                <Text style={styles.textStyle}>SIGN UP</Text>
                <Text style={styles.textStyle}>TO CONTINUE</Text>
              </View>
              <View
                style={[
                  styles.inputContainer,
                  !validName ? styles.error : null,
                ]}
              >
                <TextInput
                  style={styles.inputText}
                  placeholder="FULL NAME"
                  placeholderTextColor="#666"
                  onChangeText={(text) => setName(text)}
                  value={name}
                ></TextInput>
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
              <View
                style={[
                  styles.inputContainer,
                  !validPhone ? styles.error : null,
                ]}
              >
                <TextInput
                  style={styles.inputText}
                  placeholder="PHONE NUMBER"
                  placeholderTextColor="#666"
                  keyboardType={"numeric"}
                  onChangeText={(text) => setPhone(text)}
                  value={phone}
                ></TextInput>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => validation()}
              >
                <Text style={styles.buttonText}>JOIN US</Text>
              </TouchableOpacity>
              <View style={styles.signInBox}>
                <Text style={styles.signInText}>ALREADY A MEMBER ?</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    navigation.reset({
                      index: 0,
                      routes: [{ name: "Sign In" }],
                    })
                  }
                >
                  <Text style={styles.buttonText}>SIGN IN</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default signUp;
