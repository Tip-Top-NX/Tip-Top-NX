import React from "react";
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
} from "react-native";
const width = Dimensions.get("window").width;
const ChangePassword = () => {
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../assets/b1.jpg")}
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
                secureTextEntry={true}
              ></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="NEW PASSWORD"
                placeholderTextColor="#666"
                secureTextEntry={true}
              ></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="CONFIRM NEW PASSWORD"
                placeholderTextColor="#666"
                secureTextEntry={true}
              ></TextInput>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
          </ImageBackground>
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
    marginTop: 80,
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
