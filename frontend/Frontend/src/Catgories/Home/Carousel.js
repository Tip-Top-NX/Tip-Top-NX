/* eslint-disable */
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { BackgroundCarousel } from "./BackgroundCarousel";

const images = [
  "https://previews.123rf.com/images/zodchiy/zodchiy1804/zodchiy180400115/100309983-sale-web-banners-template-for-special-offers-advertisement-liquid-colors-within-different-forms-new-.jpg",
  "https://image.shutterstock.com/image-vector/happy-diwali-poster-header-banner-600w-1200499357.jpg",
  "https://media.istockphoto.com/photos/human-hand-drawing-contact-us-on-blackboard-picture-id984585688?k=6&m=984585688&s=612x612&w=0&h=q6Jszkpz5ay1ub70I8wxUuL99_pJe-OyhFdbi7a_4Yw="
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
