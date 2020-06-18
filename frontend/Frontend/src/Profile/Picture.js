import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import UserPermissions from "../../Utilities/UserPermissions";
import * as ImagePicker from "expo-image-picker";

const Picture = () => {
  const [picture, setPicture] = useState();
  const handlePress = async () => {
    UserPermissions.getCameraPermission();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      setPicture(result.uri);
    }
  };
  return (
    <TouchableOpacity
      style={styles.avatarPlaceholder}
      onPress={() => handlePress()}
    >
      <Image source={{ uri: picture }} style={styles.avatar} />
    </TouchableOpacity>
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
    marginTop: 10,
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
});

export default Picture;
