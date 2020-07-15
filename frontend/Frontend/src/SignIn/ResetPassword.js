import React, { useState } from "react";
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
  Alert
} from "react-native";
import { myAxios,getConfig } from "../../../axios";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;
const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [message, setMessage] = useState("");

  const navigation = useNavigation();

  const validation = () => {
    // password check
    console.log(newPassword + " " + confirmPass);
    setMessage("");
    if ( newPassword === "" || newPassword.length < 6 ){
      setMessage("The password should be atleast 6 characters long");
    }
    else if ( newPassword !== confirmPass ){
      setMessage("The passwords dont match");
    } 
    else {
      console.log("dispatching");
      const bodyPart = {
            password:newPassword
        };
      getConfig().then((config) => {
        myAxios
          .post("/users/set-password",bodyPart,config)
          .then((res) => {
              if (res.data.success) {
                Alert.alert("Success","Password changed successfully");
                navigation.navigate("Sign In");
              }
              else{
                Alert.alert("Error","Cannot change password",[{text:"Try again"}]);
              }
          })
          .catch((err) => console.log(err));
      });
    }
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../assets/background.jpg")}
            style={{
              flex: 1,
              resizeMode: "cover",
              paddingTop: 25,
              width: "100%",
            }}
            blurRadius={0}
          >
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="NEW PASSWORD"
                placeholderTextColor="#666"
                secureTextEntry={true}
                onChangeText={(text) => setNewPassword(text)}
                value={newPassword}
              ></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="CONFIRM NEW PASSWORD"
                placeholderTextColor="#666"
                secureTextEntry={true}
                onChangeText={(text) => setConfirmPass(text)}
                value={confirmPass}
              ></TextInput>
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
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    alignSelf: "center",
    width: width,
    height: "100%",
  },
  inputContainer: {
    width: width - 75,
    marginVertical: 5,
    height: 50,
    borderWidth: 1.5,
    borderColor: "#000",
    paddingLeft: 12,
    justifyContent: "center",
    alignSelf: "center",
  },
  inputText: {
    color: "#000",
    fontSize: 15,
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