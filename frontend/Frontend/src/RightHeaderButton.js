import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const RightHeaderButton = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user);

  return (
    <View>
      <AntDesign
        name="shoppingcart"
        size={24}
        style={styles.materialIcon}
        onPress={() => navigation.navigate("Cart")}
      />
      {user.isValid ? (
        <TouchableOpacity
          style={styles.counterStyle}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            {user.cart.length}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default RightHeaderButton;

const styles = StyleSheet.create({
  materialIcon: {
    alignSelf: "center",
    color: "#000",
    marginRight: 20,
  },
  counterStyle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    position: "absolute",
    top: -3,
    right: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
