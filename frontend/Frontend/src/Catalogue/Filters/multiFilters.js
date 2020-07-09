import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./FilterStyles";
import { myAxios } from "../../../../axios";

const filterTypes = ["categories", "price"];

const MultiFilters = ({ route }) => {
  const [selectedFilter, setSelectedFilter] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [prodId, setProdId] = useState(route.params.prodId);
  const [priceLower, setPriceLower] = useState();
  const [priceUpper, setPriceUpper] = useState();
  const [allSelected, setAllSelected] = useState([]);
  const [subcats, setSubcats] = useState();
  const [catArr, setCatArr] = useState();

  useEffect(() => {
    let mounted = true;
    myAxios.get("/category/4/get-subs").then((res) => {
      if (mounted) {
        setSubcats([...res.data]);
      }
    });
    return () => (mounted = false);
  });

  useEffect(() => {
    if (route.params.allSelected !== undefined) {
      setAllSelected([allSelected, ...route.params.allSelected]);
    }
    if (route.params.priceLower !== undefined) {
      setPriceLower([priceLower, ...route.params.priceLower]);
    }
    if (route.params.priceUpper !== undefined) {
      setPriceUpper([priceUpper, ...route.params.priceUpper]);
    }
    if (route.params.catArr !== undefined) {
      setCatArr([catArr, ...route.params.catArr]);
    }
  }, []);

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
  return (
    <SafeAreaView style={styles.overAllContainer}>
      <View style={styles.container}>
        <View style={styles.filterType}>
          <FlatList
            data={filterTypes}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
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
                  setSelectedFilter(filterTypes.indexOf(item)),
                    setSelectedOption();
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
                  if (
                    allSelected.find((i) => i === item.name) ||
                    item === filteredOptions[selectedFilter][selectedOption]
                  ) {
                    setSelectedOption(-1);
                    var ind = allSelected.indexOf(item.name);
                    if (ind !== -1) allSelected.splice(ind, 1);
                    var ind3 = priceLower.indexOf(item.priceLower);
                    if (ind3 !== -1) priceLower.splice(ind3, 1);
                    var ind4 = priceUpper.indexOf(item.priceUpper);
                    if (ind4 !== -1) priceUpper.splice(ind4, 1);
                    var ind2 = catArr.indexOf(item.name);
                    if (ind2 !== -1) catArr.splice(ind2, 1);
                    setAllSelected([...allSelected]);
                    setPriceLower([...priceLower]);
                    setPriceUpper([...priceUpper]);
                    setCatArr([...catArr]);
                  } else if (selectedFilter === 0) {
                    setSelectedOption(
                      filteredOptions[selectedFilter].indexOf(item)
                    ),
                      setProdId(item._id);
                    setAllSelected([...allSelected, item.name]);
                    setCatArr([...catArr, item.name]);
                  } else if (selectedFilter === 1) {
                    setSelectedOption(
                      filteredOptions[selectedFilter].indexOf(item)
                    );
                    setPriceLower([...priceLower, item.priceLower]);
                    setPriceUpper([...priceUpper, item.priceUpper]);
                    setAllSelected([...allSelected, item.name]);
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
                          filteredOptions[selectedFilter].indexOf(item) ===
                            selectedOption || allSelected.includes(item.name)
                            ? "#000"
                            : "#777",
                        fontWeight:
                          filteredOptions[selectedFilter].indexOf(item) ===
                            selectedOption || allSelected.includes(item.name)
                            ? "600"
                            : "500",
                      },
                    ]}
                  >
                    {selectedFilter === 0
                      ? item.name.split(" ").splice(-1)[0]
                      : item.name}
                  </Text>
                  {filteredOptions[selectedFilter].indexOf(item) ===
                    selectedOption || allSelected.includes(item.name) ? (
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
              allSelected: allSelected,
              catArr: catArr,
            });
          }}
        >
          <Text style={styles.buttonText}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MultiFilters;
