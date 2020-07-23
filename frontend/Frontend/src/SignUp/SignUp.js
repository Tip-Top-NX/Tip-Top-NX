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
  Alert,
  Image,
} from "react-native";
import styles from "./SignUpStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Feather } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import { signinFailed } from "../../../redux/ActionCreators";

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { myAxios } from "../../../axios";

const signUp = () => {
  const navigation = useNavigation();
  // states for handling the input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showLoader, setLoader] = useState(false);
  // states for style change if not valid
  const [validName, checkName] = useState(-1);
  const [validEmail, checkEmail] = useState(-1);
  const [validPassword, checkPassword] = useState(-1);
  const [validPhone, checkPhone] = useState(-1);

  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(-1);

  // redux

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signinFailed());
  }, []);

  const validation = () => {
    requestAnimationFrame(() => {
      const emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      const alph = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
      const bodyPart = {
        email: email,
      };

      // name check
      if (name == "") {
        checkName(0);
      } else if (!alph.test(name)) {
        checkName(0);
        // alert("Please enter a valid name")
      } else {
        checkName(1);
      }
      // email check
      if (email == "") {
        checkEmail(0);
      } else if (!emailregex.test(email)) {
        checkEmail(0);
        // alert("Please enter a valid email address");
      } else {
        checkEmail(1);
      }
      // password check
      if (password == "" || password.length < 6) {
        checkPassword(0);
        // alert("The length of the password should be atleast 6");
        setPassword("");
      } else {
        checkPassword(1);
      }
      // phone number check
      if (phone == "" || phone.length !== 10 || phone.charAt(0) < 7) {
        checkPhone(0);
      } else {
        checkPhone(1);
      }

      if (
        validEmail == 1 &&
        validName == 1 &&
        validPassword == 1 &&
        validPhone == 1
      ) {
        setLoader(true);
        myAxios.post("/users/verify-email", bodyPart).then((res) => {
          setLoader(false);
          if (res.data.success) {
            Alert.alert(
              "Note",
              "An OTP will be sent to your email, make sure you have entered the email correctly!",
              [
                {
                  text: "Cancel",
                  style: "destructive",
                },
                {
                  text: "Proceed",
                  onPress: () =>
                    navigation.navigate("Otp Verify", {
                      name: name,
                      email: email,
                      password: password,
                      contact: phone,
                    }),
                },
              ]
            );
          } else {
            Alert.alert("Alert", "Email Already Registered", [
              {
                text: "Cancel",
              },
              {
                text: "Sign In",
                style: "destructive",
                onPress: () => navigation.navigate("Sign In"),
              },
            ]);
          }
        });
        // .catch((err) => console.log(err));
      }
    });
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
          {showLoader ? (
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
              source={require("../../../assets/background.png")}
              style={{
                flex: 1,
                resizeMode: "cover",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
              blurRadius={0}
            >
              <KeyboardAwareScrollView
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
              >
                <View style={styles.title}>
                  <Text style={styles.textStyle}>SIGN UP</Text>
                  <Text style={styles.textStyle}>TO CONTINUE</Text>
                </View>
                <View
                  style={[
                    styles.inputContainer,
                    validName == 0 ? styles.error : null,
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
                    validEmail == 0 ? styles.error : null,
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
                <View
                  style={[
                    styles.inputContainer,
                    validPhone == 0 ? styles.error : null,
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
              </KeyboardAwareScrollView>
            </ImageBackground>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default signUp;
