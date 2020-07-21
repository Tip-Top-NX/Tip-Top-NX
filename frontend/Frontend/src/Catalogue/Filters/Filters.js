import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./FilterStyles";
import { myAxios } from "../../../../axios";
import Image from "react-native-scalable-image";

const filterTypes = ["categories", "price"];

const Filters = ({ route }) => {
  const [selectedFilter, setSelectedFilter] = useState();
  const [prodId, setProdId] = useState();
  const [priceLower, setPriceLower] = useState(-1);
  const [priceUpper, setPriceUpper] = useState();
  const [subcats, setSubcats] = useState();
  const [cat, setcat] = useState(route.params.cat);
  const [isLoading, setIsLoading] = useState(true);
  const prodIdMain = route.params.prodId;
  useEffect(() => {
    let mounted = true;
    myAxios.get("/category/" + prodIdMain + "/get-leaf").then((res) => {
      if (mounted) {
        setIsLoading(false);
        setSubcats([...res.data]);
      }
    });
    return () => (mounted = false);
  }, [prodIdMain]);

  const filteredOptions = [
    // 0 -> Categories Men
    subcats,
    //1 -> Price
    [
      { name: "₹0 - ₹199", priceLower: 0, priceUpper: 199 },
      { name: "₹200 - ₹499", priceLower: 200, priceUpper: 499 },
      { name: "₹500 - ₹999", priceLower: 500, priceUpper: 999 },
      { name: "Above ₹1000", priceLower: 1000, priceUpper: 10000 },
    ],
  ];

  const navigation = useNavigation();
  return isLoading ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#FFD845",
        // backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../../../../assets/loader1.gif")}
        width={Dimensions.get("window").width}
      />
    </View>
  ) : (
    <SafeAreaView style={styles.overAllContainer}>
      <View style={styles.container}>
        <View style={styles.filterType}>
          <FlatList
            data={filterTypes}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.eachFilter,
                  {
                    backgroundColor:
                      filterTypes.indexOf(item) === selectedFilter
                        ? "#fff"
                        : null,
                  },
                ]}
                onPress={() => {
                  setSelectedFilter(filterTypes.indexOf(item));
                }}
              >
                <Text
                  style={[
                    styles.eachFilterText,
                    {
                      color:
                        filterTypes.indexOf(item) === selectedFilter
                          ? "#000"
                          : "#777",
                      fontWeight:
                        filterTypes.indexOf(item) === selectedFilter
                          ? "600"
                          : "500",
                    },
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.filteredOptionsStyle}>
          <FlatList
            data={filteredOptions[selectedFilter]}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.eachFilter}
                onPress={() => {
                  if (item.name === cat) {
                    setcat();
                  } else if (item.priceLower === priceLower) {
                    setPriceLower(-1);
                    setPriceUpper();
                  } else if (selectedFilter === 0) {
                    setProdId(item._id);
                    setcat(item.name);
                  } else if (selectedFilter === 1) {
                    setPriceLower(item.priceLower);
                    setPriceUpper(item.priceUpper);
                  }
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingRight: 20,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={[
                      styles.eachFilterText,
                      {
                        color:
                          cat === item.name || item.priceLower === priceLower
                            ? "#000"
                            : "#777",
                        fontWeight:
                          cat === item.name || item.priceLower === priceLower
                            ? "600"
                            : "500",
                      },
                    ]}
                  >
                    {item.name}
                  </Text>
                  {cat === item.name || item.priceLower === priceLower ? (
                    <Feather name="check" size={24} color="#C2185B" />
                  ) : null}
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View style={styles.buttonBoxStyle}>
        <TouchableOpacity
          style={[
            styles.buttonBox,
            { backgroundColor: "#fff", borderWidth: 1, borderColor: "#C2185B" },
          ]}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={[styles.buttonText, { color: "#000" }]}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonBox}
          onPress={() => {
            navigation.navigate("Catalogue", {
              prodId: prodId,
              priceLower: priceLower,
              priceUpper: priceUpper,
              cat: cat,
            });
          }}
        >
          <Text style={styles.buttonText}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Filters;
