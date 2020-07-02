/* eslint-disable */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import ProductCard from "../../ProductCard";
import { myAxios } from "../../../../axios";

const width = Dimensions.get("window").width;

const popular = (props) => {
  const [popularProducts, setPopularProducts] = useState();
  const getProducts = () => {
    return myAxios
      .get("/category/5/get-products")
      .then((res) => setPopularProducts([...res.data]))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getProducts();
    }
    return () => (mounted = false);
  }, []);
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
        data={popularProducts}
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
    marginHorizontal: 4,
    borderStyle: "dotted",
    borderColor: "#FFB6C1",
    borderWidth: 1,
  },
  imageView: {
    width: 170,
    height: 230,
    alignSelf: "center",
    marginTop: 2,
  },
  details: {
    marginTop: 5,
    borderTopWidth: 1,
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
});

export default popular;
