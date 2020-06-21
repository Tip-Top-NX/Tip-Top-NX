import axios from "axios";
import { AsyncStorage } from "react-native";

<<<<<<< HEAD
// const myIP = "172.20.10.2";
const myIP = "172.20.10.2";
const port = "5000";
=======
// export const myIP = "172.20.10.2";
export const myIP = "192.168.43.208";
export const port = "5000";
>>>>>>> a56b8bd3d9dc427bf763cd8831d9e18fb991e6d3

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
