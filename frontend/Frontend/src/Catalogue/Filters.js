import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./FilterStyles";
import filteredOptions from "./FilterOptions";

const filterTypes = ["size", "color", "categories", "price", "discount"];

const Filters = () => {
  const [selectedFilter, setSelectedFilter] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const [prodId, setProdId] = useState();
  const [filter, setFilter] = useState();
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [priceLower, setPriceLower] = useState([]);
  const [priceUpper, setPriceUpper] = useState([]);
  const [allSelected, setAllSelected] = useState([]);

  useEffect(() => {
    console.log(allSelected, size, color, priceLower, priceUpper);
  }, [allSelected]);

  const navigation = useNavigation();
  return (
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
                  setSelectedFilter(filterTypes.indexOf(item)),
                    setSelectedOption();
                  setFilter(filterTypes[filterTypes.indexOf(item)]);
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
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.eachFilter}
                onPress={() => {
                  if (
                    allSelected.find((i) => i === item) ||
                    filteredOptions[selectedFilter][index] ===
                      filteredOptions[selectedFilter][selectedOption]
                  ) {
                    console.log("entering");
                    setSelectedOption(-1);
                    var ind = allSelected.indexOf(item);
                    if (ind !== -1) allSelected.splice(ind, 1);
                  } else if (selectedFilter === 2) {
                    setSelectedOption(
                      filteredOptions[selectedFilter].indexOf(item)
                    ),
                      setProdId(item.id);
                  } else if (selectedFilter === 0) {
                    setSelectedOption(
                      filteredOptions[selectedFilter].indexOf(item)
                    );
                    setSize([...size, filteredOptions[selectedFilter][index]]);
                    setAllSelected([
                      ...allSelected,
                      filteredOptions[selectedFilter][index],
                    ]);
                  } else if (selectedFilter === 1) {
                    setSelectedOption(
                      filteredOptions[selectedFilter].indexOf(item)
                    );
                    setColor([
                      ...color,
                      filteredOptions[selectedFilter][index],
                    ]);
                    setAllSelected([
                      ...allSelected,
                      filteredOptions[selectedFilter][index],
                    ]);
                  } else if (selectedFilter === 3) {
                    setSelectedOption(
                      filteredOptions[selectedFilter].indexOf(item)
                    );
                    setPriceLower([
                      ...priceLower,
                      filteredOptions[selectedFilter][index].priceLower,
                    ]);
                    setPriceUpper([
                      ...priceUpper,
                      filteredOptions[selectedFilter][index].priceUpper,
                    ]);
                    setAllSelected([
                      ...allSelected,
                      filteredOptions[selectedFilter][index],
                    ]);
                  } else if (selectedFilter === 4) {
                    setSelectedOption(
                      filteredOptions[selectedFilter].indexOf(item)
                    );
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
                            selectedOption ||
                          filteredOptions[selectedFilter][
                            filteredOptions[selectedFilter].indexOf(item)
                          ] ===
                            allSelected.find(
                              (i) =>
                                i ===
                                filteredOptions[selectedFilter][
                                  filteredOptions[selectedFilter].indexOf(item)
                                ]
                            )
                            ? "#000"
                            : "#777",
                        fontWeight:
                          filteredOptions[selectedFilter].indexOf(item) ===
                            selectedOption ||
                          filteredOptions[selectedFilter][
                            filteredOptions[selectedFilter].indexOf(item)
                          ] ===
                            allSelected.find(
                              (i) =>
                                i ===
                                filteredOptions[selectedFilter][
                                  filteredOptions[selectedFilter].indexOf(item)
                                ]
                            )
                            ? "600"
                            : "500",
                      },
                    ]}
                  >
                    {selectedFilter !== 2 && selectedFilter !== 3
                      ? item
                      : item.name}
                  </Text>
                  {filteredOptions[selectedFilter].indexOf(item) ===
                    selectedOption ||
                  filteredOptions[selectedFilter][
                    filteredOptions[selectedFilter].indexOf(item)
                  ] ===
                    allSelected.find(
                      (i) =>
                        i ===
                        filteredOptions[selectedFilter][
                          filteredOptions[selectedFilter].indexOf(item)
                        ]
                    ) ? (
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
            { backgroundColor: "#fff", borderWidth: 1 },
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
              filter: filter,
              size: size,
              color: color,
              priceLower: priceLower,
              priceUpper: priceUpper,
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
