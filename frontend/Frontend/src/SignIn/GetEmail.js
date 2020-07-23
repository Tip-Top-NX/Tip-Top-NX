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
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { myAxios } from "../../../axios";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const GetEmail = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(-1);
  const [showLoader, setLoader] = useState(false);

  const sendOtp = () => {
    const bodyPart = {
      email: email,
    };
    myAxios.post("/users/forgot", bodyPart).then((res) => {
      if (res.data.success) {
        setLoader(false);
        navigation.navigate("Otp Forgot", { email: email });
      } else {
        setLoader(false);
        Alert.alert("Oops!", "Entered email address is not registered!", [
          { text: "Try again" },
        ]);
      }
    });
    // .catch((err) => console.log(err));
  };

  const validation = () => {
    requestAnimationFrame(() => {
      const emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      let checker = true;

      if (email == "") {
        setValid(0);
        checker = false;
      } else if (!emailregex.test(email)) {
        setValid(0);
        checker = false;
      } else {
        setValid(1);
      }

      if (checker) {
        setLoader(true);
        sendOtp();
      }
    });
  };

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView scrollEnabled={false}>
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
                <View>
                  <Text style={styles.text}>
                    Please enter your registered email address :{" "}
                  </Text>
                </View>
                <View
                  style={[
                    styles.inputContainer,
                    valid == 0 ? styles.error : null,
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
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => validation()}
                >
                  <Text style={styles.buttonText}>SEND OTP</Text>
                </TouchableOpacity>
              </ImageBackground>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default GetEmail;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: height,
    width: width,
    backgroundColor: "#fff",
  },
  text: {
    marginLeft: 29,
    marginRight: 29,
    color: "#000",
    fontSize: 18,
    marginTop: -200,
  },
  inputContainer: {
    width: 300,
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    paddingLeft: 15,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: -130,
  },
  inputText: {
    height: 50,
    color: "#000",
    fontSize: 18,
  },
  button: {
    marginVertical: 10,
    width: 300,
    height: 50,
    backgroundColor: "rgba(0,0,0,1)",
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    padding: 5,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 1,
  },
  error: {
    borderWidth: 3,
    borderColor: "red",
  },
});
