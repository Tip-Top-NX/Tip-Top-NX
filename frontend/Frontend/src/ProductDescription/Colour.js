import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Colours = () => {
  const [selected, setSelected] = useState();

  const data = [
    { name: "blue", id: "1", col: "#0198E1" },
    { name: "pink", id: "2", col: "pink" },
    { name: "charcoal", id: "3", col: "#555" },
    { name: "black", id: "4", col: "#000" },
    { name: "white", id: "5", col: "#fff" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <View>
          <Text style={styles.headerText}>COLOURS</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.colorBox,
                { borderColor: item.id === selected ? "#3A66A7" : "#fff" },
              ]}
              onPress={() => setSelected(item.id)}
            >
              <View
                style={[styles.colorContainer, { backgroundColor: item.col }]}
              />
              <Text style={styles.colorTextStyle}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Colours;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  colorBox: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 8,
    width: 70,
    height: 80,
    marginHorizontal: 2,
  },
  colorContainer: {
    borderWidth: 1,
    height: 40,
    width: 40,
    borderRadius: 20,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    marginBottom: 10,
  },
  colorTextStyle: {
    fontWeight: "500",
    fontSize: 15,
  },
  headerStyle: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    paddingLeft: 15,
    marginBottom: 10,
    justifyContent: "center",
  },
  headerText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 12,
  },
});
