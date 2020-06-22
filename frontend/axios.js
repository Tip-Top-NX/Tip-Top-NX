import axios from "axios";
import { AsyncStorage } from "react-native";

//export const myIP = "172.20.10.2";
export const myIP = "192.168.43.242";
export const port = "5000";

export const myAxios = axios.create({
  baseURL: "http://" + myIP + ":" + port,
  withCredentials: true,
});

export const getConfig = () => {
  return AsyncStorage.getItem("token")
    .then((token) => {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      return config;
    })
    .catch((err) => console.log(err));
};