import React from "react";
import { ScrollView } from "react-native";
import ImageCarousel from "./ImageCarousel";
import ProductInfo from "./ProductInfo";
import Size from "./Size";
import ButtonBar from "./ButtonBar";
import Colours from "./Colour";
import ProductDetails from "./ProductDetails";

const ProductPage = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageCarousel />
      <ProductInfo />
      <Colours />
      <Size />
      <ButtonBar />
      <ProductDetails />
    </ScrollView>
  );
};

export default ProductPage;
