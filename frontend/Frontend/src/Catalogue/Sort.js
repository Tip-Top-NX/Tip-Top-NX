import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const width = Dimensions.get("window").width;

const sortBy = [
  "Alphabetical Order",
  "Price High to Low",
  "Price Low to High",
  "Popularity",
];

const Sort = () => {
  const [selected, setSelected] = useState();
  const navigation = useNavigation();

  return (
    <View style={styles.overAllContainer}>
      <View style={styles.container}>
        <View style={styles.filterType}>
          <FlatList
            data={sortBy}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.eachFilter}
                onPress={() => setSelected(sortBy.indexOf(item))}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingHorizontal: 20,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={[
                      styles.eachFilterText,
                      {
                        color:
                          sortBy.indexOf(item) === selected ? "#000" : "#777",
                        fontWeight:
                          sortBy.indexOf(item) === selected ? "600" : "500",
                      },
                    ]}
                  >
                    {item}
                  </Text>
                  {sortBy.indexOf(item) === selected ? (
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
    </View>
  );
};

export default Sort;

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
    width: "100%",
    // borderWidth: 1,
    backgroundColor: "#fff",
    height: "100%",
  },
  eachFilter: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#ccc",
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
