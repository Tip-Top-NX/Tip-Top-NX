/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { putProfile } from "../../../../redux/ActionCreators";
import { MaterialIcons } from "@expo/vector-icons";

const Address = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(false);
  const [selected, setSelected] = useState(true);
  const [address, setAddress] = useState("");

  useEffect(() => {
    props.onAddressChange(selected);
  }, [selected]);

  const handleSubmit = () => {
    if (address === "") {
      alert("Cannot leave address empty");
    } else {
      dispatch(
        putProfile({
          address: address,
        })
      );
      setStatus(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.addressPart}>
          <View style={styles.addressHeader}>
            <Text style={styles.headerText}>ADDRESS</Text>
          </View>
          <View style={styles.addressBox}>
            <TouchableOpacity
              style={styles.selectedBox}
              onPress={() => setSelected(!selected)}
            >
              <View
                style={[selected ? styles.selected : styles.notSelected]}
              ></View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addressTextBox}
              onPress={() => setSelected(!selected)}
            >
              <Text style={styles.addressStyle}>{user.address}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.changeAddress}>
          {status ? (
            <View>
              <TextInput
                style={styles.addressText}
                onChangeText={(text) => setAddress(text)}
                value={address}
                multiline={true}
              ></TextInput>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => handleSubmit()}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Submit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => setStatus(false)}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => setStatus(true)}
              style={{ flexDirection: "row", paddingBottom: 10 }}
            >
              <MaterialIcons name="add" size={25} color="grey" />
              <Text style={styles.changeAddHeader}>
                Change Delivery Address
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // borderWidth: 1,
    flex: 1,
    alignItems: "center",
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    elevation: 5,
    marginTop: 20,
  },
  addressPart: {
    width: "95%",
    // borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerText: {
    color: "grey",
    fontWeight: "bold",
    fontSize: 12,
  },
  addressBox: {
    width: "95%",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10,
  },
  addressHeader: {
    width: "95%",
    height: 50,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    paddingLeft: 10,
  },
  selectedBox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notSelected: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
  },
  addressTextBox: {
    // borderWidth: 1,
    width: "80%",
    padding: 8,
    paddingVertical: 10,
  },
  addressStyle: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.2,
  },
  selected: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "#3A66A7",
  },
  changeAddress: {
    width: "95%",
    paddingVertical: 10,
    paddingLeft: 15,
    paddingRight: 10,
    backgroundColor: "#fff",
  },
  changeAddHeader: {
    color: "grey",
    paddingLeft: 20,
    fontSize: 15,
    fontWeight: "500",
    alignSelf: "center",
  },
  buttonStyle: {
    width: 130,
    height: 40,
    backgroundColor: "#3A66A7",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
  },
  addressText: {
    marginTop: 5,
    marginBottom: 10,
    height: 50,
    color: "#000",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 10,
  },
});
