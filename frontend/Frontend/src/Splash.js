import React from "react";
import { StyleSheet, View } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

const Splash = () => {
  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.50)"
        animationStyle={styles.lottie}
        speed={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

export default Splash;
