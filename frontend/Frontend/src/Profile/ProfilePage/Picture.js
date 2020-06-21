/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, TouchableOpacity, Image, View, Text } from "react-native";
import UserPermissions from "../../../Utilities/UserPermissions";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { postImage } from "../../../../redux/ActionCreators";
import { myIP, port } from '../../../../axios';

const Picture = () => {
  // redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [picture, setPicture] = useState();

  const getURL = (path) => {
    return "http://"+myIP+":"+port+"/"+path;
  }

  useEffect(() => {
    if (user.image != "") {
      console.log(getURL(user.image));
      setPicture(getURL(user.image));
    }
  }, [user.image]);

  const handlePress = async () => {
    UserPermissions.getCameraPermission();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      console.log(result.uri);
      setPicture(result.uri);
      const data = new FormData();
      data.append("myImage", {
        uri: result.uri,
        type: "image/jpeg",
        name: "profile.jpg",
      });
      dispatch(postImage(data));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="chevron-left-circle"
          size={30}
          color="#F8A9A9"
          style={{ position: "absolute", top: 30, left: 20 }}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        <TouchableOpacity
          style={styles.avatarPlaceholder}
          onPress={() => handlePress()}
        >
          <Image source={{ uri: picture }} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{user.name.toUpperCase()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#E1E2E6",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarPlaceholder: {
    marginVertical: 10,
    marginTop: 30,
    width: 160,
    height: 160,
    backgroundColor: "#E1E2E6",
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#DDA0DD",
    borderStyle: "dotted",
  },
  container: {
    // borderWidth: 1,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFE5E5",
  },
  textContainer: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.7)",
  },
  header: {},
});

export default Picture;
