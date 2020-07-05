import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;

const filterTypes = ["size", "color", "categories", "price", "discount"];
const filteredOptions = [
  ["XS", "S", "M", "L", "XL", "XXL"],
  [
    "white",
    "black",
    "navy-blue",
    "charcoal-mel",
    "grey mel",
    "red mel",
    "ink blue mel",
    "light denim mel",
    "navy",
    "zone red",
    "mid grey mel",
  ],
  [],
  ["₹0 - ₹199", "₹200 - ₹499", "₹500 - ₹1000", "Above ₹1000"],
  ["Above 50%", "40% - 50%", "30% - 20%", "Below 20%"],
];

const Filters = () => {
  const [selectedFilter, setSelectedFilter] = useState();
  const [selectedOption, setSelectedOption] = useState();

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
                onPress={() => setSelectedFilter(filterTypes.indexOf(item))}
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
                onPress={() =>
                  setSelectedOption(
                    filteredOptions[selectedFilter].indexOf(item)
                  )
                }
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
                    {item}
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
            alert(
              "This function will not work as the dependent work is yet to be completed"
            );
          }}
        >
          <Text style={styles.buttonText}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Filters;

const styles = StyleSheet.create({
  overAllContainer: {
    width: width,
    // borderWidth: 1,
    minHeight: "100%",
  },
  container: {
    width: width,
    // height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    flex: 1,
  },
  filterType: {
    width: "35%",
    // borderWidth: 1,
    height: "100%",
  },
  filteredOptionsStyle: {
    width: "65%",
    // borderWidth: 1,
    height: "100%",
    backgroundColor: "#fff",
  },
  headerStyle: {
    width: "100%",
    height: 50,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eachFilter: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingLeft: 10,
    justifyContent: "center",
  },
  eachFilterText: {
    fontSize: 13,
    color: "#777",
  },
  buttonBoxStyle: {
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    alignSelf: "flex-end",
  },
  buttonBox: {
    width: 170,
    height: 50,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C2185B",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
