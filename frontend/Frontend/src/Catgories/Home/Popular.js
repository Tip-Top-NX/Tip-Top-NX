/* eslint-disable */
import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import ProductCard from "../../ProductCard";

const width = Dimensions.get("window").width;

const popularItems = [
  {
    images: require("../../../../assets/man.png"),
    _id: "1",
    name: "Name 1",
    price: "₹ 100",
  },
  {
    images: require("../../../../assets/kid.png"),
    _id: "2",
    name: "Name 2",
    price: "₹ 200",
  },
  {
    images: require("../../../../assets/women.png"),
    _id: "3",
    name: "Name 3",
    price: "₹ 300",
  },
  {
    images: require("../../../../assets/kid.png"),
    _id: "4",
    name: "Name 4",
    price: "₹ 400",
  },
  {
    images: require("../../../../assets/man.png"),
    _id: "5",
    name: "Name 5",
    price: "₹ 500",
  },
  {
    images: require("../../../../assets/kid.png"),
    _id: "6",
    name: "Name 6",
    price: "₹ 600",
  },
];

const popular = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleStyle}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          POPULAR PRODUCTS
        </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 80,
            justifyContent: "center",
          }}
          onPress={() => props.navigation.navigate("Catelogue")}
        >
          <Text
            style={{
              fontSize: 15,
              textDecorationLine: "underline",
              textAlign: "center",
              color: "#09717D",
            }}
          >
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={popularItems}
        key={popularItems._id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard
            images={item.images}
            name={item.name}
            price={item.price}
            _id={item._id}
            navigation={props.navigation}
            cardStyle={styles.cardStyle}
            imageView={styles.imageView}
            details={styles.details}
            textStyle={styles.textStyle}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 380,
    marginVertical: 20,
    justifyContent: "center",
    // flex: 1,
  },
  titleStyle: {
    width: width,
    height: 50,
    // borderWidth: 1,
    marginBottom: 5,
    justifyContent: "space-between",
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cardStyle: {
    width: 180,
    height: "100%",
    alignItems: "center",
    marginHorizontal: 3,
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

export default popular;
