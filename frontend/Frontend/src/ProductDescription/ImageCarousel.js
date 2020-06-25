/* eslint-disable */
import React, { useRef, useState } from "react";
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
  const [selectedIndex, setSelectedIndex] = useState(0);

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
                setSelectedIndex(index);
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
      <View style={styles.marker}>
        {data.map((image, i) => (
          <View
            style={[
              styles.blackCircle,
              { opacity: i === selectedIndex ? 1 : 0.3 },
            ]}
            key={i}
            active={i === selectedIndex}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    height: 300,
  },
  imageStyle: {
    borderWidth: 5,
    borderColor: "grey",
    alignSelf: "center",
  },
  marker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 10,
    marginBottom: 10,
  },
  blackCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#000",
  },
});

export default ImageCarousel;
