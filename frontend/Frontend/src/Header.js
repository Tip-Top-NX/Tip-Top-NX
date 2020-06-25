/* eslint-disable */
import React from "react";

import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
} from 'react-native'

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/FontAwesome5'
import Animated, { Easing } from 'react-native-reanimated'
const { Value, timing } = Animated

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height/20

const header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.sideImage}>
        <MaterialIcons
          name="menu"
          size={30}
          style={styles.materialIcon}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </View>
      <View style={styles.headingStyle}>
        <Text style={styles.textStyle}>TIP TOP NX</Text>
      </View>

      <View>
        <TouchableHighlight
          activeOpacity={1}
          underlayColor={"#ccd0d5"}
          onPress={() => navigation.push("Search")}
          style={styles.search_icon_box}
        >
          <Icon name="search" size={22} color="#000000" />
        </TouchableHighlight>
      </View>

      <View style={styles.sideImage}>
        <AntDesign name="shoppingcart" size={30} style={styles.materialIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: 15,
    // borderWidth: 1,
    borderColor: "blue",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sideImage: {
    width: "15%",
    // borderWidth: 1,
    borderColor: "#000",
    height: "100%",
    justifyContent: "center",
  },
  headingStyle: {
    width: "50%",
    height: "100%",
    // borderWidth: 1,
    justifyContent: "center",
  },
  materialIcon: {
    alignSelf: "center",
    color: "#000",
  },
  textStyle: {
    fontWeight: "500",
    fontSize: 20,
    color: "#000",
    textAlign: "center",
  },
  search_icon_box: {
    width:40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#e4e6eb',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginLeft:20
  },
});

export default header;
