import React from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Text,
  StyleSheet,
} from "react-native";

// var { width } = Dimensions.get("window");
// width = width * 0.9;
const width = Dimensions.get("window").width;
const height = width * 0.6; //50%

const images = [
  "https://previews.123rf.com/images/zodchiy/zodchiy1804/zodchiy180400115/100309983-sale-web-banners-template-for-special-offers-advertisement-liquid-colors-within-different-forms-new-.jpg",
  "https://image.shutterstock.com/image-vector/happy-diwali-poster-header-banner-600w-1200499357.jpg",
  "https://lh3.googleusercontent.com/proxy/p17s0AJ22uf1UkHC5PMatAJaibe97TX3ZhmNvWhaqvm7aajtcoRNtuEZRx8shOeEMEPIzOpmt3ZLET0GbgIKh6cxKSJwA6_Ud874oreMbVXR2cSeXOrchYkBBRWtx62_q5LN3xRLr4LB",
];

export default class Carousel extends React.Component {
  state = {
    active: 0,
  };

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== this.state.active) {
      this.setState({ active: slide });
    }
  };

  render() {
    return (
      <View style={style.container}>
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={style.container}
        >
          {images.map((item, index) => (
            <Image key={index} source={{ uri: item }} style={style.image} />
          ))}
        </ScrollView>
        <View style={style.pagination}>
          {images.map((i, k) => (
            <Text
              key={k}
              style={
                k == this.state.active
                  ? style.pagingActiveText
                  : style.pagingText
              }
            >
              ⬤
            </Text>
          ))}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    // marginLeft: 8,
    width: width,
    height,
    marginTop: 5,
  },
  image: {
    width,
    height,
    resizeMode: "cover",
  },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  pagingText: {
    fontSize: width / 30,
    color: "#999",
    margin: 3,
  },
  pagingActiveText: {
    fontSize: width / 30,
    color: "#fff",
    margin: 3,
  },
});
