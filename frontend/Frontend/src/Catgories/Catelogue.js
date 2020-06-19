/* eslint-disable */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useLinkProps } from "@react-navigation/native";

const Catelogue = ({ navigation }) => {
  const products = [
    {
      image: require("../../../assets/man.png"),
      id: "1",
      name: "Name 1",
      price: "₹ 100",
    },
    {
      image: require("../../../assets/kid.png"),
      id: "2",
      name: "Name 2",
      price: "₹ 200",
    },
    {
      image: require("../../../assets/women.png"),
      id: "3",
      name: "Name 3",
      price: "₹ 300",
    },
    {
      image: require("../../../assets/kid.png"),
      id: "4",
      name: "Name 4",
      price: "₹ 400",
    },
    {
      image: require("../../../assets/man.png"),
      id: "5",
      name: "Name 5",
      price: "₹ 500",
    },
    {
      image: require("../../../assets/kid.png"),
      id: "6",
      name: "Name 6",
      price: "₹ 600",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        key={products.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Product")}>
            <View style={styles.cardStyle}>
              <Image source={item.image} style={styles.imageView}></Image>
              <View style={styles.details}>
                <Text style={styles.textStyle}>Name : {item.name}</Text>
                <Text style={styles.textStyle}>Price : {item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  cardStyle: {
    width: 180,
    height: 320,
    alignItems: "center",
    marginHorizontal: 3,
    marginVertical: 5,
    borderStyle: "dotted",
    borderColor: "#FFB6C1",
    borderWidth: 1,
  },
  imageView: {
    width: 170,
    height: 250,
    alignSelf: "center",
    marginTop: 2,
  },
  details: {
    marginTop: 5,
    // borderWidth: 1,
    width: 170,
    height: 60,
    justifyContent: "space-evenly",
    paddingLeft: 10,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "500",
  },
});

export default Catelogue;
