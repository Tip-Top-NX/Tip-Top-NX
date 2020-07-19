/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Size = (props) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState();
  const size = [...props.size];

  useEffect(() => {
    props.onSizeChange(size[selected]);
  }, [selected]);

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>SELECT SIZE</Text>
        <TouchableOpacity
          style={styles.sizeChartButton}
          onPress={() => {
            navigation.navigate("Size Chart", {
              images: props.images,
              category: props.category,
            });
          }}
        >
          <Text style={styles.sizeChartButtonText}>SIZE CHART</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsBox}>
        <FlatList
          data={size}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.sizeBox,
                {
                  borderColor:
                    size.indexOf(item) === selected ? "#C2185B" : "#000",
                },
                { borderWidth: size.indexOf(item) === selected ? 3 : 1 },
              ]}
              onPress={() => {
                setSelected(size.indexOf(item));
              }}
            >
              <Text style={styles.sizeStyle}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
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
    marginBottom: 10,
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
