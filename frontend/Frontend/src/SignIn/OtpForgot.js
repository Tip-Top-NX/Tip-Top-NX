import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  Dimensions,
  ImageBackground,
  Alert,
} from "react-native";
import { AsyncStorage } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { myAxios } from "../../../axios";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

class OtpForgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin1: "",
      pin2: "",
      pin3: "",
      pin4: "",
      flag1: 0,
      flag2: 0,
      flag3: 0,
      flag4: 0,
      isDisable: true,
      email: props.route.params.email,
    };
  }

  componentDidMount = () => {
    this.refs.ref1.focus();
  };

  checkOtp = () => {
    let otp =
      this.state.pin1 * 1000 +
      this.state.pin2 * 100 +
      this.state.pin3 * 10 +
      this.state.pin4 * 1;

    const bodyPart = {
      otp: otp,
      email: this.state.email,
    };
    myAxios
      .post("/users/verify-otp", bodyPart)
      .then((res) => {
        if (res.data.success) {
          Alert.alert("Success", "You can change your password successfully!");
          AsyncStorage.setItem("token", res.data.token);
          this.props.navigation.navigate("Reset Password");
        } else {
          Alert.alert("Error1212", "Invalid OTP!", [{ text: "Try again" }]);
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { pin1, pin2, pin3, pin4 } = this.state;
    return (
      <SafeAreaView>
        <KeyboardAwareScrollView scrollEnabled={false}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
              <ImageBackground
                source={require("../../../assets/background.jpg")}
                style={{
                  flex: 1,
                  resizeMode: "cover",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
                blurRadius={0}
              >
                <View style={{ marginTop: -250 }}>
                  <Text style={styles.text}>
                    Enter OTP sent to your Email :{" "}
                  </Text>
                  <View style={styles.otpBox}>
                    <TextInput
                      ref={"ref1"}
                      keyboardType={"numeric"}
                      placeholder={"__"}
                      onChangeText={(pin1) => {
                        this.setState({ pin1: pin1 });
                        if (pin1 != "") {
                          this.setState({ flag1: 1 });
                          this.refs.ref2.focus();
                        }
                        if (pin1 == "" && this.state.flag1 == 1) {
                          this.setState({ isDisable: true });
                          this.refs.ref1.focus();
                        }
                      }}
                      value={pin1}
                      maxLength={1}
                      style={
                        this.state.pin1 != "" ? styles.boxFilled : styles.box
                      }
                    />
                    <TextInput
                      ref={"ref2"}
                      keyboardType={"numeric"}
                      placeholder={"__"}
                      onChangeText={(pin2) => {
                        this.setState({ pin2: pin2 });
                        if (pin2 != "") {
                          this.setState({ flag2: 1 });
                          this.refs.ref3.focus();
                        }
                        if (pin2 == "" && this.state.flag2 == 1) {
                          this.setState({ isDisable: true });
                          this.refs.ref1.focus();
                        }
                      }}
                      value={pin2}
                      maxLength={1}
                      style={
                        this.state.pin2 != "" ? styles.boxFilled : styles.box
                      }
                    />
                    <TextInput
                      ref={"ref3"}
                      keyboardType={"numeric"}
                      placeholder={"__"}
                      onChangeText={(pin3) => {
                        this.setState({ pin3: pin3 });
                        if (pin3 != "") {
                          this.setState({ flag3: 1 });
                          this.refs.ref4.focus();
                        }
                        if (pin3 == "" && this.state.flag3 == 1) {
                          this.setState({ isDisable: true });
                          this.refs.ref2.focus();
                        }
                      }}
                      value={pin3}
                      maxLength={1}
                      style={
                        this.state.pin3 != "" ? styles.boxFilled : styles.box
                      }
                    />
                    <TextInput
                      ref={"ref4"}
                      keyboardType={"numeric"}
                      placeholder={"__"}
                      onChangeText={(pin4) => {
                        this.setState({ pin4: pin4 });
                        if (pin4 != "") {
                          this.setState({ flag4: 1 });
                          this.setState({ isDisable: false });
                        }
                        if (pin4 == "" && this.state.flag4 == 1) {
                          this.setState({ isDisable: true });
                          this.refs.ref3.focus();
                        }
                      }}
                      value={pin4}
                      maxLength={1}
                      style={
                        this.state.pin4 != "" ? styles.boxFilled : styles.box
                      }
                    />
                  </View>
                  <TouchableOpacity
                    style={
                      this.state.isDisable
                        ? styles.buttonDisabled
                        : styles.button
                    }
                    onPress={() => this.checkOtp()}
                    disabled={this.state.isDisable}
                  >
                    <Text style={styles.buttonText}>SUBMIT</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

export default OtpForgot;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: height,
    width: width,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  otpBox: {
    flex: 1,
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: 40,
  },
  text: {
    marginLeft: 29,
    color: "#000",
    fontSize: 18,
    marginTop: 0,
  },
  box: {
    backgroundColor: "#f5f4f2",
    fontWeight: "bold",
    alignSelf: "center",
    padding: 12,
    paddingLeft: 15,
    fontSize: 24,
    height: 55,
    width: "15%",
    borderRadius: 7,
    borderWidth: 1.5,
    borderBottomWidth: 5,
    borderColor: "black",
    alignItems: "center",
  },
  boxFilled: {
    backgroundColor: "#f5f4f2",
    fontWeight: "bold",
    alignSelf: "center",
    padding: 12,
    paddingLeft: 19,
    fontSize: 24,
    height: 55,
    width: "15%",
    borderRadius: 7,
    borderWidth: 1.5,
    borderBottomWidth: 5,
    borderColor: "black",
    alignItems: "center",
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
    marginTop: 50,
  },
  buttonDisabled: {
    marginVertical: 10,
    width: 300,
    height: 50,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    padding: 5,
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 1,
  },
});
