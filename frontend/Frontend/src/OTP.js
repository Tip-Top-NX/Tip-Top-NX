import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const OTP = () => {
  const [selectedF, setSelectedF] = useState(3);
  const [otpArray, setOtpArray] = useState(["", "", "", ""]);

  const onOtpChange = (index) => {
    console.log(selectedF);
    return (value) => {
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);

      if (value !== "") {
        if (index === 0) {
          setSelectedF(1);
        } else if (index === 1) {
          setSelectedF(2);
        } else if (index === 2) {
          setSelectedF(3);
        }
      }
    };
  };

  return (
    <View style={styles.container}>
      {[0, 1, 2, 3].map((item, index) => {
        return (
          <View key={index} style={styles.box}>
            <TextInput
              style={{ fontSize: 15 }}
              keyboardType="numeric"
              value={otpArray[index]}
              onChangeText={onOtpChange(index)}
              onKeyPress={console.log(selectedF + " " + index)}
              autoFocus={index === selectedF ? true : false}
              maxLength={1}
            ></TextInput>
          </View>
        );
      })}
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  box: {
    width: 50,
    height: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
