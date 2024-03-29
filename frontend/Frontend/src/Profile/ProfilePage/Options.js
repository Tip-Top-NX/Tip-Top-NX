/* eslint-disable */
import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Options = () => {
  const navigation = useNavigation();
  const optionList = [
    {
      name: "Edit Profile",
      id: "1",
      navigator: () => {
        navigation.navigate("Edit Profile");
      },
    },
    {
      name: "Wishlist",
      id: "2",
      navigator: () => {
        navigation.navigate("Wishlist");
      },
    },
    {
      name: "Points",
      id: "3",
      navigator: () => {
        navigation.navigate("Points");
      },
    },
    {
      name: "Orders",
      id: "4",
      navigator: () => {
        navigation.navigate("My Orders");
      },
    },
    {
      name: "Change Password",
      id: "5",
      navigator: () => {
        navigation.navigate("Change Password");
      },
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={optionList}
        showsVerticalScrollIndicator={false}
        key={optionList.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.component} onPress={item.navigator}>
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
    // borderWidth: 0.5,
    borderColor: "#fff",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
    // borderStyle: "dotted",
    shadowColor: "#fff",
    shadowRadius: 4,
    shadowOpacity: 0.2,
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
  textStyle: {
    fontWeight: "600",
    fontSize: 17,
    letterSpacing: 0.3,
    color: "#fff",
  },
});

export default Options;
