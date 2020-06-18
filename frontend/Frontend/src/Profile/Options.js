import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const Options = () => {
  const optionList = [
    { name: "Address", id: "1" },
    { name: "Wishlist", id: "2" },
    { name: "Points", id: "3" },
    { name: "Orders", id: "4" },
    { name: "Edit Profile", id: "5" },
    { name: "Complaints", id: "6" },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={optionList}
        showsVerticalScrollIndicator={false}
        key={optionList.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.component}>
            <Text style={styles.textStyle}>{item.name}</Text>
            <AntDesign name="right" size={25} color="silver" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 20,
    height: "62%",
    paddingVertical: 15,
  },
  component: {
    height: 80,
    borderWidth: 1.5,
    borderColor: "#DDA0DD",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    borderStyle: "dotted",
    backgroundColor: "rgba(52, 52, 52, 0.7)",
  },
  textStyle: {
    fontWeight: "600",
    fontSize: 17,
    letterSpacing: 0.3,
    color: "#fff",
  },
});

export default Options;
