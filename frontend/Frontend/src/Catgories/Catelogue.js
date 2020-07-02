/* eslint-disable */
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "../ProductCard";
import { myAxios } from "../../../axios";
import Splash from "../Splash";

const Catelogue = ({ navigation }) => {
  const [products, setProducts] = useState();
  const [show, setShow] = useState(true);

  useEffect(() => {
    let mounted = true;
    myAxios
      .get("/category/5/get-products")
      .then((res) => {
        if (mounted) {
          setProducts([...res.data]);
        }
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => (mounted = false);
  }, []);

  return (
    <View style={styles.container}>
      {show ? (
        <Splash />
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item._id}
          showsVerticalScrollIndicator={false}
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
              navigation={navigation}
              _id={item._id}
              cardStyle={styles.cardStyle}
              imageView={styles.imageView}
              details={styles.details}
              textStyle={styles.textStyle}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
  },
  cardStyle: {
    width: 180,
    height: 320,
    alignItems: "center",
    marginHorizontal: 3,
    marginVertical: 7,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
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

export default Catelogue;
