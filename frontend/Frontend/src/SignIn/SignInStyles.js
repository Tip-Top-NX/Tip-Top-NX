import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: "100%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    // marginTop: 10,
    padding: 10,
    height: 150,
    width: 300,
    // borderWidth: 1,
    justifyContent: "flex-end",
    borderColor: "#000",
    alignSelf: "center",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#000",
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
  signUpBox: {
    marginTop: 40,
    // borderWidth: 1,
    borderColor: "#000",
    height: 90,
    width: 300,
    paddingTop: 10,
    alignSelf: "center",
  },
  signUpText: {
    color: "#000",
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "bold",
  },
  error: {
    borderWidth: 3,
    borderColor: "red",
  },
});

export default styles;
