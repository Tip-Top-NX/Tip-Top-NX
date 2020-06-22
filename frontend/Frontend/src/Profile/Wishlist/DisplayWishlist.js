/* eslint-disable */
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ProductCard from "../../ProductCard";

const DisplayWishlist = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.wishlist}
        key={props.wishlist._id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
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
