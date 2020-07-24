/* eslint-disable */
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import React, { useState } from "react";
import { Dimensions, View, Image, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const height = Dimensions.get("window").height;

function CustomInvalidDrawerContent(props) {
  const [selected, setSelected] = useState("Home");

  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      {/* <DrawerItemList {...props} /> */}
      <View
        style={{
          backgroundColor: "#001833",
          height: 50,
          marginBottom: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/tag.png")}
          style={{
            width: 40,
            height: 40,
            alignSelf: "center",
            marginHorizontal: 15,
          }}
        />
        <Text
          style={{
            color: "white",
            marginLeft: 20,
            fontWeight: "bold",
          }}
        >
          TIP-TOP NX
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <DrawerItem
          label="Home"
          focused={selected === "Home" ? true : false}
          onPress={() => {
            props.navigation.navigate("Home"), setSelected("Home");
          }}
          icon={({ focused }) => (
            <Feather
              name="home"
              size={20}
              color={focused ? "#001833" : "grey"}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
          )}
          activeTintColor="#001833"
          inactiveTintColor="grey"
          labelStyle={{ marginLeft: 10 }}
        />
        <DrawerItem
          label="Cart"
          onPress={() => {
            props.navigation.navigate("Cart"), setSelected("Cart");
          }}
          focused={selected === "Cart" ? true : false}
          icon={({ focused }) => (
            <AntDesign
              name="shoppingcart"
              size={20}
              style={{ marginLeft: 10, marginRight: 10 }}
              color={focused ? "#001833" : "grey"}
            />
          )}
          activeTintColor="#001833"
          inactiveTintColor="grey"
          labelStyle={{ marginLeft: 10 }}
        />
        <DrawerItem
          label="Profile"
          focused={selected === "Profile" ? true : false}
          onPress={() => {
            props.navigation.navigate("Profile"), setSelected("Profile");
          }}
          icon={({ focused }) => (
            <MaterialIcons
              name="face"
              size={20}
              color={focused ? "#001833" : "grey"}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
          )}
          activeTintColor="#001833"
          inactiveTintColor="grey"
          labelStyle={{ marginLeft: 10 }}
          style={{ borderBottomWidth: 1, borderColor: "#ccc" }}
        />
        <DrawerItem
          label="Contact Us"
          focused={selected === "Contact Us" ? true : false}
          onPress={() => {
            props.navigation.navigate("Contact Us"), setSelected("Contact Us");
          }}
          icon={({ focused }) => (
            <Feather
              name="phone-call"
              size={20}
              color={focused ? "#001833" : "grey"}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
          )}
          activeTintColor="#001833"
          inactiveTintColor="grey"
          labelStyle={{ marginLeft: 10 }}
        />
        <DrawerItem
          label="Terms and Conditions"
          focused={selected === "Terms and Conditions" ? true : false}
          onPress={() => {
            props.navigation.navigate("Terms and Conditions"),
              setSelected("Terms and Conditions");
          }}
          icon={({ focused }) => (
            <Feather
              name="info"
              size={20}
              color={focused ? "#001833" : "grey"}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
          )}
          activeTintColor="#001833"
          inactiveTintColor="grey"
          labelStyle={{ marginLeft: 10 }}
          style={{ borderBottomWidth: 1, borderColor: "#ccc" }}
        />
        <DrawerItem
          label="Sign Up | Log In"
          focused={selected === "Sign Up | Log In" ? true : false}
          onPress={() => {
            props.navigation.navigate("Sign Up | Log In"),
              setSelected("Sign Up | Log In");
          }}
          icon={({ focused }) => (
            <AntDesign
              name="login"
              size={20}
              color={focused ? "#001833" : "grey"}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
          )}
          activeTintColor="#001833"
          inactiveTintColor="grey"
          labelStyle={{ marginLeft: 10 }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default CustomInvalidDrawerContent;
