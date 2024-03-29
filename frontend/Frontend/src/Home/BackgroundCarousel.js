/* eslint-disable */
import * as React from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import Image from "react-native-scalable-image";

const DEVICE_WIDTH = Dimensions.get("window").width;
const AUTO_SWIPE_INTERVAL = 3000;

const height = DEVICE_WIDTH * 0.6; //60%

class BackgroundCarousel extends React.Component {
  _isMounted = false;

  scrollRef = React.createRef();
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
    };
    this.scrollRef = React.createRef();
  }

  componentDidMount = () => {
    this._isMounted = true;

    setInterval(() => {
      if (this._isMounted) {
        this.setState(
          (prev) => ({
            selectedIndex:
              prev.selectedIndex === this.props.images.length - 1
                ? 0
                : prev.selectedIndex + 1,
          }),
          () => {
            this.scrollRef.current.scrollTo({
              animated: true,
              x: DEVICE_WIDTH * this.state.selectedIndex,
              y: 0,
            });
          }
        );
      }
    }, AUTO_SWIPE_INTERVAL);
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  nextImage = () =>
    this.setState((prev) => ({
      selectedIndex:
        prev.selectedIndex === this.props.images.length - 1
          ? 0
          : prev.selectedIndex + 1,
    }));

  setSelectedIndex = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    const selectedIndex = Math.floor(contentOffset.x / viewSize.width);
    this.setState({ selectedIndex });
  };

  render() {
    const { images } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View style={{ height: height, width: "100%", marginTop: 10 }}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
          showsHorizontalScrollIndicator={false}
        >
          {images.map((image) => (
            <Image
              // style={styles.backgroundImage}
              width={Dimensions.get("window").width}
              source={{ uri: image }}
              key={image}
            />
          ))}
        </ScrollView>
        <View style={styles.circleDiv}>
          {images.map((image, i) => (
            <View
              style={[
                styles.whiteCircle,
                { opacity: i === selectedIndex ? 1 : 0.5 },
              ]}
              key={image}
              active={i === selectedIndex}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: Dimensions.get("window").width,
  },
  circleDiv: {
    position: "absolute",
    bottom: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 10,
  },
  whiteCircle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#fff",
  },
});

export { BackgroundCarousel };
