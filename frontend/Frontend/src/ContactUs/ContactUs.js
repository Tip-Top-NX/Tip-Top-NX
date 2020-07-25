import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;

const ContactUs = ({ navigation }) => {
  const message =
    "WE'RE HERE TO HELP AND ANSWER ANY QUESTION YOU MIGHT HAVE. WE LOOK FORWARD TO HEARING FROM YOU !!";
  const locationURL =
    "https://www.google.com/maps/place/Jockey+Tip+Top+NX/@21.0104184,75.5599831,17z/data=!4m5!3m4!1s0x3bd90fbad6f97063:0xd3f03be3a05a4db0!8m2!3d21.0104184!4d75.5621718";

  return (
    <View style={styles.container}>
      <View style={styles.headerComponent}>
        <Text style={styles.headerText}>CONTACT US</Text>
        <Text style={styles.messageStyle}>{message}</Text>
      </View>
      <View style={{ height: "60%" }}>
        <View style={styles.subContainer}>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() =>
              Linking.openURL("whatsapp://send?text=&phone=919422284234")
            }
          >
            <FontAwesome name="whatsapp" size={50} color="white" />
            <Text style={styles.textStyle}>WHATSAPP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => Linking.openURL("mailto:nxtiptop@gmail.com")}
          >
            <Fontisto name="email" size={50} color="white" />
            <Text style={styles.textStyle}>EMAIL</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => Linking.openURL(locationURL)}
          >
            <SimpleLineIcons name="location-pin" size={50} color="white" />
            <Text style={styles.textStyle}>LOCATION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => Linking.openURL(`tel:${8308773358}`)}
          >
            <Feather name="phone-call" size={50} color="white" />
            <Text style={styles.textStyle}>PHONE</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.terms}
        onPress={() => navigation.navigate("Terms and Conditions")}
      >
        <Text style={styles.termsText}>TERMS AND CONDITIONS</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: "100%",
    backgroundColor: "#000",
    justifyContent: "space-between",
    alignContent: "center",
    paddingBottom: 10,
  },
  headerComponent: {
    height: "30%",
    width: width,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
  },
  messageStyle: {
    color: "#fff",
    paddingHorizontal: 30,
    textAlign: "center",
    fontWeight: "500",
  },
  cardStyle: {
    width: (width - 10) / 2,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 2.5,
  },
  textStyle: {
    color: "#fff",
    fontWeight: "600",
  },
  subContainer: {
    flexDirection: "row",
    width: width,
    height: "50%",
    justifyContent: "space-evenly",
  },
  terms: {
    height: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  termsText: {
    color: "grey",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 15,
  },
});
