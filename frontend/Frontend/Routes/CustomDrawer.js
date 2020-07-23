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
import { SimpleLineIcons } from "@expo/vector-icons";

const height = Dimensions.get("window").height;

function CustomDrawerContent(props) {
  const [selected, setSelected] = useState("Home");
  const dispatch = useDispatch();

  const logoutHandler = () => {
    Alert.alert(
      "Sign Out",
      "Are you sure you want to sign out?",
      [
        {
          text: "Yes",
          onPress: () => {
            dispatch(signinFailed());
            props.navigation.navigate("Home");
          },
          style: "destructive",
        },
        {
          text: "No",
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
          height: height - 40,
          marginTop: 10,
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
                name="person-outline"
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
              <SimpleLineIcons
                name="notebook"
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
            label="Points"
            focused={selected === "Points" ? true : false}
            onPress={() => {
              props.navigation.navigate("Points"), setSelected("Points");
            }}
            icon={({ focused }) => (
              <AntDesign
                name="gift"
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
            label="Contact Us"
            focused={selected === "Contact Us" ? true : false}
            onPress={() => {
              props.navigation.navigate("Contact Us"),
                setSelected("Contact Us");
            }}
            icon={({ focused }) => (
              <Feather
                name="phone-call"
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

        <DrawerItem
          // style={{ marginTop: 50 }}
          label="Sign Out"
          focused={selected === "Sign Out" ? true : false}
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
