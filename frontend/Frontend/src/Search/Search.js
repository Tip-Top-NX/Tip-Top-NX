import React, { useState } from "react";
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
import NoResultFound from "../../../assets/no_results_found.png";
import Splash from "../Splash";

const Search = (props) => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [found, setFound] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const submitHandler = () => {
    setIsFetching(true);
    myAxios
      .post("/product/search", { keyword: keyword })
      .then((res) => {
        setProducts([...res.data]);
        setIsFetching(false);
        res.data.length == 0 ? setFound(false) : setFound(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <SafeAreaView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <TextInput
              style={styles.inputBox}
              onChange={(event) => setKeyword(event.nativeEvent.text)}
              autoFocus={true}
              onSubmitEditing={() => submitHandler()}
              placeholder="Type here to search"
              placeholderTextColor="grey"
              // selectionColor={"#000"}
            />
            {isFetching ? (
              <Splash />
            ) : !found ? (
              <Image
                style={{ width: "100%", height: "100%", resizeMode: "contain" }}
                source={NoResultFound}
              />
            ) : (
              <FlatList
                data={products}
                numColumns={2}
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
