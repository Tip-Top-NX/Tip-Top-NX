/* eslint-disable */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import ProductCard from "../ProductCard";
import { myAxios } from "../../../axios";

const width = Dimensions.get("window").width;

const popular = (props) => {
  // const [popularProducts, setPopularProducts] = useState();

  // useEffect(() => {
  //   let mounted = true;
  //   myAxios
  //     .get("/category/5/get-products")
  //     .then((res) => {
  //       if (mounted) {
  //         props.checkLoading(false);
  //         setPopularProducts([...res.data]);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  //   return () => (mounted = false);
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleStyle}>
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "slategrey" }}>
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
        data={props.popularProducts}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            brand={item.brand}
            description={item.description}
            colors={item.colors}
            images={item.images}
            size={item.size}
            style={item.style}
            discountPercentage={item.discountPercentage}
            name={item.name}
            price={item.price}
            navigation={props.navigation}
            _id={item._id}
            cardStyle={styles.cardStyle}
            imageView={styles.imageView}
            details={styles.details}
            textStyle={styles.textStyle}
            imageContainer={styles.imageContainer}
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
    borderTopWidth: 1,
    borderColor: "#ccc",
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
    marginHorizontal: 4,
    // borderStyle: "dotted",
    borderColor: "#ccc",
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
    // borderTopWidth: 1,
    borderColor: "grey",
    width: 170,
    height: 80,
    justifyContent: "space-evenly",
    paddingLeft: 10,
    paddingVertical: 3,
    paddingRight: 5,
  },
  textStyle: {
    fontSize: 13,
    fontWeight: "500",
  },
  imageContainer: {
    width: "100%",
    backgroundColor: "#E6E4E4",
    borderBottomWidth: 1,
    borderColor: "grey",
  },
});

export default popular;
