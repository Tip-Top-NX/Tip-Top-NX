/* eslint-disable */
import React, { useState } from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import ImageCarousel from "./ImageCarousel";
import ProductInfo from "./ProductInfo";
import Size from "./Size";
import ButtonBar from "./ButtonBar";
import Colours from "./Colour";
import ProductDetails from "./ProductDetails";

const height = Dimensions.get("window").height;

const ProductPage = ({ route }) => {
  const colors = route.params.colors;
  const brand = route.params.brand;
  const description = route.params.description;
  const images = route.params.images;
  const size = route.params.size;
  const styles = route.params.style;
  const discountPercentage = route.params.discountPercentage;
  const name = route.params.name;
  const price = route.params.price;
  const _id = route.params._id;
  const category = route.params.category;

  const [chosenSize, setChosenSize] = useState();
  const [chosenColor, setChosenColor] = useState();
  const [checkHeight, setHeight] = useState();

  const handleScroll = (event) => {
    setHeight(event.nativeEvent.contentOffset.y);
  };

  return (
    <SafeAreaView style={styles1.overAllContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={1}
        style={{ height: height - 100 }}
      >
        <ImageCarousel
          images={
            category === 11 ||
            category === 12 ||
            category === 13 ||
            category === 14 ||
            category === 33 ||
            category === 32 ||
            category === 31 ||
            category === 52 ||
            category === 53 ||
            category === 54 ||
            category === 55 ||
            category === 57 ||
            category === 58 ||
            category === 59 ||
            category === 34 ||
            category === 35 ||
            category === 36 ||
            category === 37 ||
            category === 103 ||
            category === 104 ||
            category === 105 ||
            category === 106 ||
            category === 108 ||
            category === 109 ||
            category === 110 ||
            category === 111 ||
            category === 112 ||
            category === 122 ||
            category === 123 ||
            category === 124 ||
            category === 125 ||
            category === 126 ||
            category === 128 ||
            category === 129 ||
            category === 130 ||
            category === 131 ||
            category === 132 ||
            category === 133 ||
            category === 134 ||
            category === 135
              ? [...images.slice(0, 1)]
              : [...images.slice(0, images.length - 1)]
          }
          length={images.length}
        />
        <ProductInfo
          brand={brand}
          name={name}
          price={price}
          discountPercentage={discountPercentage}
        />
        <Colours
          colors={colors}
          onColorChange={(colorValue) => setChosenColor(colorValue)}
          images={images}
          category={category}
          length={images.length}
        />
        <Size
          size={size}
          onSizeChange={(sizeValue) => setChosenSize(sizeValue)}
          images={images}
          category={category}
        />

        <ButtonBar
          _id={_id}
          chosenSize={chosenSize}
          chosenColor={chosenColor}
        />
        <ProductDetails
          styles={styles}
          description={description}
          id={_id}
          category={category}
        />
      </ScrollView>
      {checkHeight < 285 ? (
        <ButtonBar
          _id={_id}
          chosenSize={chosenSize}
          chosenColor={chosenColor}
          price={price}
        />
      ) : null}
    </SafeAreaView>
  );
};

const styles1 = StyleSheet.create({
  overAllContainer: {
    height: "100%",
  },
});

export default ProductPage;
