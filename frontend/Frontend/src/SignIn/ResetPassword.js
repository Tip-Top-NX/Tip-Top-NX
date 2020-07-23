import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  ImageBackground,
  Alert,
  Image,
  BackHandler
} from "react-native";
import { myAxios, getConfig } from "../../../axios";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showLoader, setLoader] = useState(false);

  const navigation = useNavigation();

  const backAction = () => {
    Alert.alert("Hold on!", "You need to reset your password first", [
      { text: "Okay" },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const validation = () => {
    requestAnimationFrame(() => {
      // password check
      setMessage("");
      if (newPassword === "" || newPassword.length < 6) {
        setMessage("The password should be atleast 6 characters long");
      } else if (newPassword !== confirmPass) {
        setMessage("The passwords dont match");
      } else {
        setLoader(true);
        const bodyPart = {
          password: newPassword,
        };
        getConfig().then((config) => {
          myAxios.post("/users/set-password", bodyPart, config).then((res) => {
            if (res.data.success) {
              setLoader(false);
              Alert.alert("Success", "Password changed successfully");
              navigation.navigate("Sign In");
            } else {
              setLoader(false);
              Alert.alert("Error", "Cannot change password", [
                { text: "Try again" },
              ]);
            }
          });
          // .catch((err) => console.log(err));
        });
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
                backgroundColor: "#fff",
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
                paddingTop: 25,
                width: "100%",
              }}
              blurRadius={0}
            >
              <View style={styles.inputContainerPass}>
                <TextInput
                  style={styles.inputTextPass}
                  placeholder="NEW PASSWORD"
                  placeholderTextColor="#666"
                  secureTextEntry={showPassword}
                  onChangeText={(text) => setNewPassword(text)}
                  value={newPassword}
                ></TextInput>
                <HandlePasswordField />
              </View>
              <View style={styles.inputContainerPass}>
                <TextInput
                  style={styles.inputTextPass}
                  placeholder="CONFIRM PASSWORD"
                  placeholderTextColor="#666"
                  secureTextEntry={showPassword}
                  onChangeText={(text) => setConfirmPass(text)}
                  value={confirmPass}
                ></TextInput>
                <HandlePasswordField />
              </View>
              <Text
                style={{
                  marginTop: 80,
                  textAlign: "center",
                  marginBottom: 10,
                  color: "red",
                  letterSpacing: 0.2,
                }}
              >
                {message}
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => validation()}
              >
                <Text style={styles.buttonText}>RESET PASSWORD</Text>
              </TouchableOpacity>
            </ImageBackground>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    width: width,
    height: "100%",
  },
  inputContainerPass: {
    width: width - 75,
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    paddingLeft: 15,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  inputTextPass: {
    height: 50,
    color: "#000",
    fontSize: 18,
    width: width - 150,
  },
  button: {
    width: width - 75,
    height: 50,
    borderWidth: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 5,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 1,
  },
});
