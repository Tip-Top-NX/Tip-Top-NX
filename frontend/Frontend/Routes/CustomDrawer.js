/* eslint-disable */
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import React, { useState } from "react";
import { Alert, Dimensions, View } from "react-native";
import { useDispatch } from "react-redux";
import { signinFailed } from "../../redux/ActionCreators";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const height = Dimensions.get("window").height;

function CustomDrawerContent(props) {
  const [selected, setSelected] = useState("Home");
  const dispatch = useDispatch();

  const logoutHandler = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Yes",
          onPress: () => {
            dispatch(signinFailed());
            props.navigation.navigate("Home");
          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      {/* <DrawerItemList {...props} /> */}
      <View
        style={{
          justifyContent: "space-between",
          height: height - 30,
        }}
      >
        <View>
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
                color={focused ? "#C2185B" : "grey"}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
            )}
            activeTintColor="#C2185B"
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
                color={focused ? "#C2185B" : "grey"}
              />
            )}
            activeTintColor="#C2185B"
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
                color={focused ? "#C2185B" : "grey"}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
            )}
            activeTintColor="#C2185B"
            inactiveTintColor="grey"
            labelStyle={{ marginLeft: 10 }}
          />
          <DrawerItem
            label="Wishlist"
            focused={selected === "Wishlist" ? true : false}
            onPress={() => {
              props.navigation.navigate("Wishlist"), setSelected("Wishlist");
            }}
            icon={({ focused }) => (
              <FontAwesome
                name="bookmark-o"
                size={20}
                color={focused ? "#C2185B" : "grey"}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
            )}
            activeTintColor="#C2185B"
            inactiveTintColor="grey"
            labelStyle={{ marginLeft: 10 }}
          />
          <DrawerItem
            label="Orders"
            focused={selected === "Orders" ? true : false}
            onPress={() => {
              props.navigation.navigate("Orders"), setSelected("Orders");
            }}
            icon={({ focused }) => (
              <FontAwesome5
                name="clipboard-list"
                size={24}
                color={focused ? "#C2185B" : "grey"}
                style={{ marginLeft: 10, marginRight: 10 }}
              />
            )}
            activeTintColor="#C2185B"
            inactiveTintColor="grey"
            labelStyle={{ marginLeft: 10 }}
          />
        </View>
        <DrawerItem
          // style={{ marginTop: 50 }}
          label="Logout"
          focused={selected === "Logout" ? true : false}
          onPress={() => {
            logoutHandler(), setSelected("Logout");
          }}
          icon={({ focused }) => (
            <AntDesign
              name="logout"
              size={20}
              color={focused ? "#C2185B" : "grey"}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
          )}
          activeTintColor="#C2185B"
          inactiveTintColor="grey"
          labelStyle={{ marginLeft: 10 }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
