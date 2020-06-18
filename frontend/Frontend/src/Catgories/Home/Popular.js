/* eslint-disable */
import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";

const width = Dimensions.get("window").width;

const popularItems = [
  {
    image: require("../../../../assets/man.png"),
    id: "1",
    name: "Name 1",
    price: "₹ 100",
  },
  {
    image: require("../../../../assets/kid.png"),
    id: "2",
    name: "Name 2",
    price: "₹ 200",
  },
  {
    image: require("../../../../assets/women.png"),
    id: "3",
    name: "Name 3",
    price: "₹ 300",
  },
  {
    image: require("../../../../assets/kid.png"),
    id: "4",
    name: "Name 4",
    price: "₹ 400",
  },
  {
    image: require("../../../../assets/man.png"),
    id: "5",
    name: "Name 5",
    price: "₹ 500",
  },
  {
    image: require("../../../../assets/kid.png"),
    id: "6",
    name: "Name 6",
    price: "₹ 600",
  },
];

const popular = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleStyle}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          MOST LOVED ITEMS
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
        key={popularItems.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Product")}
          >
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
    height: 380,
    marginVertical: 20,
    justifyContent: "center",
    // flex: 1,
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
});

export default popular;
