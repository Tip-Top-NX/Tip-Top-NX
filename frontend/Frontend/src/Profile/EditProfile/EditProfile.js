/* eslint-disable */
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./EditProfileStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import UserPermissions from "../../../Utilities/UserPermissions";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { setProfile, postImage } from "../../../../redux/ActionCreators";

const EditProfile = () => {
  // redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const email = user.email;

  // states for handling the input
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.contact.toString());
  const [address, setAddress] = useState(user.address);
  const [picture, setPicture] = useState(user.image);

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
      console.log("posting" + result.uri);
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

  const validation = () => {
    const alph = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;

    console.log(name + "  " + phone);

    // name check
    if (name === "") {
      checkName(false);
      console.log(validName + "empty");
    } else if (!alph.test(name)) {
      checkName(false);
      console.log(validName + "numbers");
    } else {
      checkName(true);
      console.log(validName + "correct");
    }
    // phone number check
    if (phone === "" || phone.length !== 10 || phone.charAt(0) < 7) {
      checkPhone(false);
      console.log(
        validPhone +
          " wrong" +
          " " +
          phone +
          " " +
          phone.length +
          " " +
          phone.charAt(0)
      );
    } else {
      checkPhone(true);
      console.log(validPhone + "correct");
    }

    if (validName && validPhone) {
      console.log("updated");
      console.log(validName);
      console.log(validPhone);
      dispatch(
        setProfile({
          name,
          contact: phone,
        })
      );
    }
  };

  return (
    <KeyboardAwareScrollView>
      <ImageBackground
        source={require("../../../../assets/b.jpg")}
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
        blurRadius={0}
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.avatarPlaceholder}
              onPress={() => handlePress()}
            >
              <Image source={{ uri: picture }} style={styles.avatar} />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <Text style={styles.heading}>FULL NAME</Text>
              <TextInput
                style={[styles.inputText, !validName ? styles.error : null]}
                onChangeText={(text) => setName(text)}
                value={name}
              ></TextInput>
            </View>
            <View style={styles.emailContainer}>
              <Text style={styles.heading}>EMAIL ADDRESS</Text>
              <TextInput
                style={styles.emailText}
                value={email}
                editable={false}
              ></TextInput>
            </View>
            <View style={styles.addressContainer}>
              <Text style={styles.heading}>DELIVERY ADDRESS</Text>
              <TextInput
                style={styles.addressText}
                onChangeText={(text) => setAddress(text)}
                value={address}
                multiline={true}
              ></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.heading}>CONTACT</Text>
              <TextInput
                style={[styles.inputText, !validPhone ? styles.error : null]}
                keyboardType={"numeric"}
                onChangeText={(text) => setPhone(text)}
                maxLength={10}
                value={phone}
              ></TextInput>
            </View>
            <TouchableOpacity
              style={{
                width: 200,
                height: 50,
                // backgroundColor: "#813743",
                justifyContent: "center",
                marginTop: 15,
                marginBottom: 30,
                backgroundColor: "rgba(112,128,144, 0.7)",
                borderColor: "#2F4F4F",
                borderWidth: 3,
              }}
              onPress={() => validation()}
            >
              <Text style={{ textAlign: "center", color: "#fff" }}>
                SAVE CHANGES
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAwareScrollView>
  );
};

export default EditProfile;
