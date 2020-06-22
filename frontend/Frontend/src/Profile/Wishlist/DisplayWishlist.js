/* eslint-disable */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const DisplayWishlist = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.wishlist}
        key={props.wishlist.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => alert("Item Page Opens")}>
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

export default DisplayWishlist;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  cardStyle: {
    width: 180,
    alignItems: "center",
    borderStyle: "dotted",
    borderColor: "#FFB6C1",
    borderWidth: 1,
    marginHorizontal: 3,
    marginVertical: 5,
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
