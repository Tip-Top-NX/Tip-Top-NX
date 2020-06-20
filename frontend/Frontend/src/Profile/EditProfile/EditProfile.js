/* eslint-disable */
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
} from "react-native";
import { useSelector } from "react-redux";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import UserPermissions from "../../../Utilities/UserPermissions";
import * as ImagePicker from "expo-image-picker";

const EditProfile = () => {
  // redux
  const user = useSelector((state) => state.user);
  const email = user.email;

  // states for handling the input
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.contact);
  const [address, setAddress] = useState(user.address);
  const [picture, setPicture] = useState();

  // states for style change if not valid
  const [validName, checkName] = useState(true);
  const [validPhone, checkPhone] = useState(true);

  const handlePress = async () => {
    UserPermissions.getCameraPermission();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      user.image = result.uri;
      setPicture(result.uri);
    }
  };

  const validation = () => {
    const alph = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;

    // name check
    if (name == "") {
      checkName(false);
    } else if (!alph.test(name)) {
      checkName(false);
      // alert("Please enter a valid name");
    } else {
      checkName(true);
    }
    // phone number check
    if (phone == "" || phone.length !== 10 || phone.charAt(0) < 7) {
      checkPhone(false);
    } else {
      checkPhone(true);
    }
  };
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.avatarPlaceholder}
            onPress={() => handlePress()}
          >
            <Image source={{ uri: picture }} style={styles.avatar} />
          </TouchableOpacity>
          <View
            style={[styles.inputContainer, !validName ? styles.error : null]}
          >
            <Text>Name</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => setName(text)}
              value={name}
            ></TextInput>
          </View>
          <View style={styles.emailContainer}>
            <Text>Email</Text>
            <TextInput
              style={styles.emailText}
              value={email}
              editable={false}
            ></TextInput>
          </View>
          <View style={styles.addressContainer}>
            <Text>Address</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={(text) => setAddress(text)}
              value={address}
              multiline={true}
            ></TextInput>
          </View>
          <View
            style={[styles.inputContainer, !validPhone ? styles.error : null]}
          >
            <Text>Contact</Text>
            <TextInput
              style={styles.inputText}
              keyboardType={"numeric"}
              onChangeText={(text) => setPhone(text)}
              value={phone.toString()}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={{
              width: 200,
              height: 50,
              backgroundColor: "#813743",
              justifyContent: "center",
              marginTop: 15,
            }}
            onPress={() => validation()}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>
              SAVE CHANGES
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
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
    marginTop: 20,
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
    width: "100%",
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    paddingLeft: 15,
    justifyContent: "center",
  },
  inputText: {
    // height: 50,
    color: "#000",
    fontSize: 18,
  },
  error: {
    borderWidth: 3,
    borderColor: "red",
  },
  emailContainer: {
    width: 300,
    marginVertical: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "silver",
    paddingLeft: 15,
    justifyContent: "center",
  },
  emailText: {
    height: 50,
    color: "#777",
    fontSize: 18,
  },
  addressContainer: {
    width: 300,
    marginVertical: 10,
    height: 100,
    borderWidth: 1,
    paddingLeft: 15,
    justifyContent: "center",
    paddingRight: 20,
    paddingVertical: 5,
  },
});

export default EditProfile;
