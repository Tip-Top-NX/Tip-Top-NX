import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ValidDrawer from "../Routes/ValidDrawer";
import InvalidDrawer from "../Routes/InvalidDrawer";
import AsyncStorage from "@react-native-community/async-storage";
import { myAxios, getConfig } from "../../axios";
import { setUser, signinFailed } from "../../redux/ActionCreators";
import { View, Image } from "react-native";

const CheckUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("token")
      .then((token) => {
        if (token != null) {
          getConfig().then((config) => {
            myAxios
              .get("/profile", config)
              .then((res) => dispatch(setUser(res.data.user, token)))
              .catch((err) => dispatch(signinFailed()));
          });
        } else {
          dispatch(signinFailed());
        }
      })
      .catch((err) => dispatch(signinFailed()));
  }, []);

  const user = useSelector((state) => state.user);
  return user.tokenChecking ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../../assets/i.gif")}
        style={{ height: 100, width: 100 }}
      />
    </View>
  ) : user.isValid ? (
    <ValidDrawer />
  ) : (
    <InvalidDrawer />
  );
};

export default CheckUser;
