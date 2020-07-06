import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            onChange={(text) => setInputValue(text)}
            value={inputValue}
            autoFocus={true}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
    height: "100%",
  },
  inputBox: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 8,
    height: 35,
    paddingHorizontal: 10,
  },
});
