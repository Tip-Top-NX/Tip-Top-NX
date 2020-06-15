/* eslint-disable */
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const subCat2 = () => {
  const itemList = [
    { name: "Item 1", id: "1" },
    { name: "Item 2", id: "2" },
    { name: "Item 3", id: "3" },
    { name: "Item 4", id: "4" },
    { name: "Item 5", id: "5" },
    { name: "Item 6", id: "6" },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={itemList}
        key={itemList.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.itemContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
    paddingTop: 40,
  },
  itemContainer: {
    margin: 5,
    width: 170,
    height: 200,
    borderWidth: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#fff",
  },
  itemName: {
    fontSize: 25,
    color: "#fff",
  },
});

export default subCat2;
