import React, { Component } from "react";

import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";

var { width } = Dimensions.get("window");
var available_width = width - 40 - 4;

export default class ProgressPage extends Component {
  constructor(props) {
    super(props);
    this.progress = new Animated.Value(0);
    this.state = {
      progress: 0,
    };
  }

  componentDidMount() {
    this.progress.setValue(0);
    this.progress.addListener((progress) => {
      this.setState({
        progress: parseInt(progress.value) + "%",
      });
    });

    Animated.timing(this.progress, {
      duration: 7000,
      toValue: 100,
    }).start(() => {
      this.setState({
        progress: "ORDER PLACED SUCCESSFULLY!",
      });
    });
  }

  getProgressStyles() {
    var animated_width = this.progress.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [0, available_width / 2, available_width],
    });
    //red -> orange -> green
    const color_animation = this.progress.interpolate({
      inputRange: [0, 50, 100],
      outputRange: ["red", "orange", "#0AC92B"],
    });

    return {
      width: animated_width,
      height: 30, //height of the progress bar
      backgroundColor: color_animation,
      borderRadius: 8,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.progress_container}>
          <Animated.View
            style={[this.getProgressStyles.call(this)]}
          ></Animated.View>
        </View>
        <Text style={styles.progress_status}>{this.state.progress}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  progress_container: {
    borderWidth: 2,
    borderColor: "#333",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  progress_status: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
