/* eslint-disable */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

const Empty = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/b1.jpg")}
        style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center",
          width: "100%",
        }}
        blurRadius={0}
      >
        <Text style={styles.headingStyle}>{props.title}</Text>
        <Text style={styles.textStyle}>{props.desc}</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => props.navigation.navigate("Categories")}
        >
          <Text>Browse</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  headingStyle: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 50,
  },
  textStyle: {
    textAlign: "center",
    marginTop: 50,
  },
  buttonStyle: {
    width: 200,
    height: 50,
    borderWidth: 3,
    marginVertical: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
