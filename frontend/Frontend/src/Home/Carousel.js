/* eslint-disable */
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { BackgroundCarousel } from "./BackgroundCarousel";

const images = [
  // "https://images.unsplash.com/photo-1527264935190-1401c51b5bbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
  // "https://image.shutterstock.com/image-vector/happy-diwali-poster-header-banner-600w-1200499357.jpg",
  require("../../../assets/c2.png"),
  require("../../../assets/c1.png"),
  require("../../../assets/c4.png"),
  require("../../../assets/c3.png"),
];
export default class Carousel extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundCarousel images={images} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});
