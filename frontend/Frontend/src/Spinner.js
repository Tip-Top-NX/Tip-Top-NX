import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, ActivityIndicator } from "react-native";

const spinner = (props) => {
  console.log(props.visible);
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible}>
      <View style={styles.modalView}>
        <ActivityIndicator size="large" color="skyblue" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    opacity: 0.4,
  },
});

export default spinner;
