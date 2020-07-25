import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { myAxios } from "../../../axios";
import ProductCard from "../ProductCard";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [found, setFound] = useState(true);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    let mounted = true;
    myAxios
      .get("/category/popular")
      .then((res) => {
        if (mounted) {
          setIsFetching(false);
          setProducts([...res.data]);
        }
      })
      .catch((err) => console.log(err));
    return () => (mounted = false);
  }, []);

  const submitHandler = () => {
    setIsFetching(true);
    myAxios.post("/product/search", { keyword: keyword }).then((res) => {
      setProducts([...res.data]);
      setIsFetching(false);
      res.data.length == 0 ? setFound(false) : setFound(true);
    });
    // .catch((err) => console.log(err));
  };

  return (
    <>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <TextInput
              style={styles.inputBox}
              onChange={(event) => setKeyword(event.nativeEvent.text)}
              onSubmitEditing={() => submitHandler()}
              placeholder="Type here to search"
              placeholderTextColor="grey"
              // selectionColor={"#000"}
            />
            {isFetching ? (
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
            ) : !found ? (
              <View
                style={{
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Image
                  width={Dimensions.get("window").width}
                  source={require("../../../assets/not.png")}
                />
              </View>
            ) : (
              <FlatList
                data={products}
                numColumns={2}
                getItemLayout={(item, index) => ({
                  length: 300,
                  offset: 300 * index,
                  index,
                })}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
                //  onScroll={handleScroll}
                renderItem={({ item }) => (
                  <ProductCard
                    brand={item.brand}
                    description={item.description}
                    colors={item.colors}
                    images={item.images}
                    size={item.size}
                    category={item.category}
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
            )}
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 10,
    width: "100%",
    height: "100%",
  },
  inputBox: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 8,
    height: 35,
    paddingHorizontal: 10,
    borderColor: "#C2185B",
    marginBottom: 10,
  },
  cardStyle: {
    width: Dimensions.get("window").width / 2 - 10,
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
    width: Dimensions.get("window").width / 2 - 20,
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
