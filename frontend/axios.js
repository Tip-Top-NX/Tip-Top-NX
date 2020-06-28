import axios from "axios";
import { AsyncStorage } from "react-native";

export const myIP = "192.168.0.106";
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

export const getURL = (path) => {
  uri = "http://" + myIP + ":" + port + "/" + path;
  return uri;
};
