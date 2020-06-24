/* eslint-disable */
import React, { useRef } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
} from "react-native";
import Carousel from "react-native-anchor-carousel";

const { width } = Dimensions.get("window");

const data = [
  { uri: require("../../../assets/man.png") },
  { uri: require("../../../assets/man.png") },
  { uri: require("../../../assets/man.png") },
  { uri: require("../../../assets/man.png") },
  { uri: require("../../../assets/man.png") },
];

const ImageCarousel = () => {
  const carouselRef = useRef(null);

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                carouselRef.current.scrollToIndex(index);
              }}
            >
              <Image source={item.uri} style={styles.imageStyle} />
            </TouchableOpacity>
          );
        }}
        itemWidth={width}
        inActiveOpacity={0.1}
        ref={carouselRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 280,
    backgroundColor: "black",
  },
  imageStyle: {
    borderWidth: 5,
    borderColor: "grey",
    alignSelf: "center",
  },
});

export default ImageCarousel;
