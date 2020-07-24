/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./EditProfileStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import UserPermissions from "../../../Utilities/UserPermissions";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { postImage, putProfile } from "../../../../redux/ActionCreators";
import { getURL } from "../../../../axios";
import SwitchSelector from "react-native-switch-selector";

const EditProfile = ({ navigation }) => {
  // redux
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const email = user.email;
  const contact = user.contact.toString();

  // states for handling the input
  const [name, setName] = useState(user.name);
  const [address, setAddress] = useState(user.address);
  const [picture, setPicture] = useState(getURL(user.image));
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);

  let init = 0;
  if (user.gender == "Female") init = 1;

  // states for style change if not valid
  const [validName, checkName] = useState(-1);
  const [validAge, checkAge] = useState(-1);

  const handlePress = async () => {
    UserPermissions.getCameraPermission();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.cancelled) {
      const data = new FormData();
      data.append("myImage", {
        uri: result.uri,
        type: "image/jpeg",
        name: "profile.jpg",
      });
      // console.log(user);
      dispatch(postImage(data));
    }
  };

  useEffect(() => {
    if (user.image != "") {
      setPicture(getURL(user.image));
    }
  }, [user.image]);

  const validation = () => {
    const alph = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
    let valid = true;
    // name check
    if (name === "") {
      checkName(0);
      valid = false;
    } else if (!alph.test(name)) {
      checkName(0);
      valid = false;
    } else {
      checkName(1);
    }

    // age check
    if (age === "" || age.length >= 3) {
      checkAge(0);
      valid = false;
    } else {
      checkAge(1);
    }

    if (valid) {
      dispatch(
        putProfile({
          name,
          address,
          age,
          gender,
        })
      );
      alert("The changes have been saved successfully");
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../../assets/editProfile.png")}
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
        blurRadius={2}
      >
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
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
                  style={[
                    styles.inputText,
                    validName == 0 ? styles.error : null,
                  ]}
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
              <View style={{ flexDirection: "row" }}>
                <View style={styles.ageContainer}>
                  <Text style={styles.heading}>AGE</Text>
                  <TextInput
                    style={[
                      styles.inputText,
                      validAge == 0 ? styles.error : null,
                    ]}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setAge(text)}
                    maxLength={3}
                    value={age === undefined ? "" : age.toString()}
                  ></TextInput>
                </View>

                <View style={styles.genderContainer}>
                  <Text style={styles.heading}>GENDER</Text>
                  <SwitchSelector
                    initial={init}
                    onPress={(value) => setGender(value)}
                    borderRadius={0}
                    height={50}
                    fontSize={16}
                    textColor={"#777"} //'#7a44cf'
                    selectedColor={"white"}
                    buttonColor={"rgba(52,52,52, 1)"}
                    borderColor={"black"}
                    backgroundColor={"rgba(112,128,144, 0.0)"}
                    hasPadding
                    options={[
                      { label: "Male", value: "Male" },
                      { label: "Female", value: "Female" },
                    ]}
                  />
                </View>
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
                  style={styles.emailText}
                  value={contact}
                  editable={false}
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
                  backgroundColor: "rgba(52,52,52, 1)",
                  borderColor: "grey",
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
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EditProfile;
