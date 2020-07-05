import React, { useState } from "react";
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
                  selectedFilter !== 2
                    ? setSelectedOption(
                        filteredOptions[selectedFilter].indexOf(item)
                      )
                    : (setSelectedOption(
                        filteredOptions[selectedFilter].indexOf(item)
                      ),
                      setProdId(item.id));
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
                          selectedOption
                            ? "#000"
                            : "#777",
                        fontWeight:
                          filteredOptions[selectedFilter].indexOf(item) ===
                          selectedOption
                            ? "600"
                            : "500",
                      },
                    ]}
                  >
                    {selectedFilter !== 2 ? item : item.name}
                  </Text>
                  {filteredOptions[selectedFilter].indexOf(item) ===
                  selectedOption ? (
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
            navigation.navigate("Catalogue", { prodId: prodId });
          }}
        >
          <Text style={styles.buttonText}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Filters;
