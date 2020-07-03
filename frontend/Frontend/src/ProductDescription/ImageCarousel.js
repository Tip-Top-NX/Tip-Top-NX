/* eslint-disable */
import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { getURL } from "../../../axios";

const { width } = Dimensions.get("window");

const ImageCarousel = (props) => {
  const carouselRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = [...props.images];
  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity activeOpacity={1}>
              <Image
                source={{ uri: getURL(item) }}
                style={[
                  styles.imageStyle,
                  {
                    aspectRatio: images.indexOf(item) === 0 ? 79 / 137 : 1,
                  },
                ]}
              />
            </TouchableOpacity>
          );
        }}
        itemWidth={width}
        sliderWidth={width}
        inActiveOpacity={0.1}
        ref={carouselRef}
        onSnapToItem={(i) => setSelectedIndex(i)}
      />
      <View style={styles.marker}>
        <Pagination
          dotsLength={images.length}
          activeDotIndex={selectedIndex}
          containerStyle={{ paddingVertical: 10 }}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    // borderWidth: 5,
    borderColor: "grey",
    alignSelf: "center",
    width: "90%",
    height: 340,
    // aspectRatio: 79 / 137,
    marginBottom: 10,
    marginTop: 10,
  },
  marker: {
    alignItems: "center",
    justifyContent: "center",
  },
  blackCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#000",
  },
  container: {
    // borderWidth: 1,
    height: 385,
    marginVertical: 0,
  },
});

export default ImageCarousel;
