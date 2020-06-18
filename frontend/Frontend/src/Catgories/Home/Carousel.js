/* eslint-disable */
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { BackgroundCarousel } from "./BackgroundCarousel";

const images = [
  "https://previews.123rf.com/images/zodchiy/zodchiy1804/zodchiy180400115/100309983-sale-web-banners-template-for-special-offers-advertisement-liquid-colors-within-different-forms-new-.jpg",
  "https://image.shutterstock.com/image-vector/happy-diwali-poster-header-banner-600w-1200499357.jpg",
  "https://lh3.googleusercontent.com/proxy/aPqeaU0NbR7IAhDoE6Av5YkzgKsJ5TAM-KjULghI651kj0avxYwYCLJFx2nvu48TgFDMvKRxdDKufi-6qv-IR38gfOTASx3UF9IjoKlP2Z3m9QkAKhBTpTXTumw",
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
