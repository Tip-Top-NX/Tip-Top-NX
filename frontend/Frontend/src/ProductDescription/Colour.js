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

const Colours = (props) => {
  const [selected, setSelected] = useState();
  const colors = [...props.colors];
  const navigation = useNavigation();

  useEffect(() => {
    props.onColorChange(colors[selected]);
  }, [selected]);

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.headerText}>COLOURS</Text>
        {props.length <= 2 ||
        props.length >= 4 ||
        props.category === 103 ||
        props.category === 104 ||
        props.category === 105 ||
        props.category === 106 ||
        props.category === 108 ||
        props.category === 109 ||
        props.category === 110 ||
        props.category === 111 ||
        props.category === 112 ||
        props.category === 122 ||
        props.category === 123 ||
        props.category === 124 ||
        props.category === 125 ||
        props.category === 126 ||
        props.category === 128 ||
        props.category === 129 ||
        props.category === 130 ||
        props.category === 131 ||
        props.category === 132 ||
        props.category === 133 ||
        props.category === 134 ||
        props.category === 135 ? (
          <TouchableOpacity
            style={styles.sizeChartButton}
            onPress={() => {
              navigation.navigate("Color Chart", {
                images: props.images,
                length: props.length,
                category: props.category,
              });
            }}
          >
            <Text style={styles.sizeChartButtonText}>COLORS</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "90%",
        }}
      >
        <FlatList
          data={colors}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.colorBox,
                {
                  borderColor:
                    colors.indexOf(item) === selected ? "#C2185B" : "#000",
                  borderWidth: colors.indexOf(item) === selected ? 3 : 1,
                },
              ]}
              onPress={() => setSelected(colors.indexOf(item))}
            >
              <Text style={styles.colorTextStyle}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
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
    borderRadius: 8,
    minWidth: 80,
    height: 80,
    marginHorizontal: 5,
    paddingHorizontal: 5,
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
  colorTextStyle: {
    fontWeight: "500",
    fontSize: 15,
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
    width: "100%",
  },
  headerText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 12,
  },
});
