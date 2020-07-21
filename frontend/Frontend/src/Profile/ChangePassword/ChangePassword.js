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
  Image
} from "react-native";
import { myAxios, getConfig } from "../../../../axios";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showLoader, setLoader] = useState(false);

  const navigation = useNavigation();

  const validation = () => {
    // password check
    setMessage("");
    if (newPassword === "" || newPassword.length < 6) {
      setMessage("The password should be atleast 6 characters long");
    } else if (newPassword !== confirmPass) {
      setMessage("The passwords dont match");
    } else {
      setLoader(true);
      const bodyPart = {
        oldPassword: oldPassword,
        newPassword: newPassword,
      };
      getConfig().then((config) => {
        myAxios
          .put("/profile/changePassword", bodyPart, config)
          .then((res) => {
            if (res.status === 200) {
              setLoader(false);
              alert("Your Password has been changed successfully");
              navigation.navigate("Profile");
            }
          })
          .catch((err) => {
              setLoader(false);
              setMessage("Incorrect current password");
          });
      });
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
                source={require("../../../../assets/q.gif")}
                style={{ height: 100, width: 100 }}
              />
            </View>
          ) : (
          <ImageBackground
            source={require("../../../../assets/background.jpg")}
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
                placeholder="CURRENT PASSWORD"
                placeholderTextColor="#666"
                secureTextEntry={showPassword}
                onChangeText={(text) => setOldPassword(text)}
                value={oldPassword}
              ></TextInput>
              <HandlePasswordField />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="NEW PASSWORD"
                placeholderTextColor="#666"
                secureTextEntry={showPassword}
                onChangeText={(text) => setNewPassword(text)}
                value={newPassword}
              ></TextInput>
              <HandlePasswordField />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="CONFIRM NEW PASSWORD"
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
              <Text style={styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
          </ImageBackground>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default ChangePassword;

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
    borderWidth: 1,
    borderColor: "#000",
    paddingLeft: 12,
    paddingRight: 10,
    justifyContent: "space-between",
    alignSelf: "center",
    flexDirection: "row",
  },
  inputText: {
    color: "#000",
    fontSize: 15,
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
