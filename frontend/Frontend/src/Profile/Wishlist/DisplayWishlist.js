/* eslint-disable */
import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import ProductCard from "../../ProductCard";

const width = Dimensions.get("window").width;

const DisplayWishlist = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.wishlist}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <ProductCard
            _id={item._id}
            images={item.images}
            name={item.name}
            brand={item.brand}
            category={item.category}
            style={item.style}
            description={item.description}
            price={item.price}
            discountPercentage={item.discountPercentage}
            navigation={props.navigation}
            cardStyle={styles.cardStyle}
            imageView={styles.imageView}
            details={styles.details}
            imageContainer={styles.imageContainer}
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
    height: "100%",
    // borderWidth: 1,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  cardStyle: {
    width: width / 2 - 10,
    height: 320,
    alignItems: "center",
    marginHorizontal: 3,
    marginVertical: 7,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderWidth: 0.5,
  },
  imageView: {
    height: 230,
    aspectRatio: 5 / 8,
    alignSelf: "center",
    marginTop: 2,
  },
  details: {
    marginTop: 5,
    // borderWidth: 1,
    borderColor: "grey",
    width: width / 2 - 20,
    height: 80,
    justifyContent: "space-evenly",
    paddingLeft: 10,
    paddingVertical: 3,
    paddingRight: 5,
  },
  textStyle: {
    fontSize: 13,
    // borderWidth: 1,
    fontWeight: "500",
  },
  imageContainer: {
    width: "100%",
    backgroundColor: "#E6E4E4",
    borderWidth: 1,
    borderColor: "silver",
  },
});
