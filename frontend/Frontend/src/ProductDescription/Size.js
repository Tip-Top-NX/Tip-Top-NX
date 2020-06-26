import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const Size = () => {
  const [selected, setSelected] = useState();

  const data = [
    { name: "S", id: "1" },
    { name: "M", id: "2" },
    { name: "L", id: "3" },
    { name: "XL", id: "4" },
    { name: "XXL", id: "5" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>SELECT SIZE</Text>
        <TouchableOpacity style={styles.sizeChartButton}>
          <Text style={styles.sizeChartButtonText}>SIZE CHART</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsBox}>
        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.sizeBox,
                { borderColor: item.id === selected ? "#3A66A7" : "#000" },
                { borderWidth: item.id === selected ? 3 : 1 },
              ]}
              onPress={() => setSelected(item.id)}
            >
              <Text style={styles.sizeStyle}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Size;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    marginTop: 10,
  },
  headerStyle: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderColor: "#ccc",
  },
  headerText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 12,
  },
  sizeChartButton: {
    height: 50,
    width: 80,
    justifyContent: "center",
  },
  sizeChartButtonText: {
    fontSize: 12,
    textDecorationLine: "underline",
    textAlign: "center",
    color: "#00868B",
  },
  optionsBox: {
    // borderWidth: 1,
    height: 90,
    alignItems: "center",
    paddingTop: 15,
  },
  sizeBox: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeStyle: {
    fontWeight: "bold",
  },
});
