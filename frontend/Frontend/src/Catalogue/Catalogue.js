/* eslint-disable */
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ProductCard from "../ProductCard";
import { myAxios } from "../../../axios";
import ButtonBox from "./ButtonBox";

const width = Dimensions.get("window").width;

const Catalogue = ({ navigation, route }) => {
  const [products, setProducts] = useState();
  // const [show, setShow] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [fetcher, setFetcher] = useState(false);
  const [counter, setCounter] = useState(1);
  const forFilters = route.params.forFilters;
  const prodId = route.params.prodId;
  const sort = route.params.sortBy;
  const order = route.params.sortCode;
  const priceLower =
    route.params.priceLower === -1 ? undefined : route.params.priceLower;
  const priceUpper = route.params.priceUpper;
  const cat = route.params.cat;
  // const allSelected = route.params.allSelected;

  useEffect(() => {
    let mounted = true;
    const body = {
      sort: sort,
      order: order,
      priceLower: priceLower,
      priceUpper: priceUpper,
    };
    myAxios
      .post("/category/" + prodId + "/get-products/1", body)
      .then((res) => {
        if (mounted) {
          setIsLoading(false);
          if (sort !== "Price") {
            setProducts(shuffle([...res.data]));
          } else {
            setProducts([...res.data]);
          }
        }
      })
      .catch((err) => console.log(err));
    return () => (mounted = false);
  }, [prodId, sort, order, priceLower, priceUpper]);

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const nextItems = async () => {
    if (products.length >= 10) {
      await setCounter(counter + 1);
      setFetcher(true);
      const body = {
        sort: sort,
        order: order,
        priceLower: priceLower,
        priceUpper: priceUpper,
      };
      myAxios
        .post("/category/" + prodId + "/get-products/" + counter, body)
        .then((res) => {
          if (!res.data.end) {
            if (sort !== "Price") {
              setProducts(products.concat(shuffle([...res.data])));
            } else {
              setProducts(products.concat([...res.data]));
            }
            setFetcher(false);
          } else {
            setFetcher(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const showFooter = () => {
    return fetcher ? (
      <View style={{ marginVertical: 10 }}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={require("../../../assets/i.gif")}
            style={{ height: 100, width: 100 }}
          />
        </View>
      ) : (
        <View
          style={{
            // alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            data={products}
            numColumns={2}
            keyExtractor={(item, index) => index}
            onEndReached={nextItems}
            onEndReachedThreshold={0.2}
            ListFooterComponent={showFooter}
            renderItem={({ item }) => (
              <ProductCard
                brand={item.brand}
                category={item.category}
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
                imageContainer={styles.imageContainer}
              />
            )}
          />
          <ButtonBox
            prodId={forFilters}
            // allSelected={allSelected}
            // priceLower={priceLower}
            // priceUpper={priceUpper}
            cat={cat}
            order={order}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    // borderWidth: 1,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardStyle: {
    width: width / 2 - 10,
    height: 300,
    alignItems: "center",
    marginHorizontal: 3,
    marginVertical: 7,
    borderColor: "#ccc",
    backgroundColor: "white",
    borderWidth: 0.5,
  },
  imageView: {
    height: 210,
    aspectRatio: 5 / 8,
    alignSelf: "center",
    // marginTop: 2,
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
    height: 210,
  },
});

export default Catalogue;
