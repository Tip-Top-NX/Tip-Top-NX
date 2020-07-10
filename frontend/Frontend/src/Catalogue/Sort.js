import React, { useState, useEffect } from "react";
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

const sortBy = [
  { name: "Price High to Low", num: 1 },
  { name: "Price Low to High", num: -1 },
];

const Sort = ({ route }) => {
  const [selected, setSelected] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params.order === -1) {
      setSelected(1);
    } else if (route.params.order === 1) {
      setSelected(0);
    }
  }, []);

  return (
    <SafeAreaView style={styles.overAllContainer}>
      <View style={styles.container}>
        <View style={styles.filterType}>
          <FlatList
            data={sortBy}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.eachFilter}
                onPress={() => {
                  if (sortBy.indexOf(item) !== selected) {
                    setSelected(sortBy.indexOf(item));
                  } else {
                    setSelected();
                  }
                }}
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
                    {item.name}
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
              prodId: route.params.prodId,
              sortCode: sortBy[selected].num,
              sortBy: sortBy[selected].name.split(" ").splice(0)[0],
            });
          }}
        >
          <Text style={styles.buttonText}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Sort;

const styles = StyleSheet.create({
  overAllContainer: {
    width: width,
    // borderWidth: 1,
    minHeight: "100%",
    height: "100%",
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
    height: 40,
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
