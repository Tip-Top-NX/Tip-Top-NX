/* eslint-disable */
import React, { useState } from "react";
import { ScrollView } from "react-native";
import ImageCarousel from "./ImageCarousel";
import ProductInfo from "./ProductInfo";
import Size from "./Size";
import ButtonBar from "./ButtonBar";
import Colours from "./Colour";
import ProductDetails from "./ProductDetails";

const ProductPage = ({ route, navigation }) => {
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
<<<<<<< HEAD
=======

  const [chosenSize, setChosenSize] = useState("No");
  const [chosenColor, setChosenColor] = useState("No");
>>>>>>> 591ddc4e8fcb4bf9fca194bd8015fb919838f325

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageCarousel images={images} />
      <ProductInfo
        brand={brand}
        name={name}
        price={price}
        discountPercentage={discountPercentage}
      />
<<<<<<< HEAD
      <Colours colors={colors} />
      <Size size={size} />
      <ButtonBar navigation={navigation} _id={_id} />
=======
      <Colours
        colors={colors}
        onColorChange={(colorValue) => setChosenColor(colorValue)}
      />
      <Size
        size={size}
        onSizeChange={(sizeValue) => setChosenSize(sizeValue)}
        images={images[images.length - 1]}
      />
      <ButtonBar _id={_id} chosenSize={chosenSize} chosenColor={chosenColor} />
>>>>>>> 591ddc4e8fcb4bf9fca194bd8015fb919838f325
      <ProductDetails styles={styles} description={description} />
    </ScrollView>
  );
};

export default ProductPage;
