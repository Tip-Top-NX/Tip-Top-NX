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
        {props.length <= 2 ? (
          <TouchableOpacity
            style={styles.sizeChartButton}
            onPress={() => {
              navigation.navigate("Color Chart", {
                sizeChart: props.images,
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
    width: 80,
    height: 80,
    marginHorizontal: 5,
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
