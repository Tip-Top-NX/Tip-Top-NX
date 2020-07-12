import axios from "axios";
import { AsyncStorage } from "react-native";

export const myUri = "http://192.168.43.208:5000/";
// export const myUri = "https://tiptopnx.herokuapp.com/";
export const port = "5000";

// export const myAxios = axios.create({
//   baseURL: "http://" + myIP + ":" + port,
//   withCredentials: true,
// });

export const myAxios = axios.create({
  baseURL: myUri,
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
  const uri = myUri + path;
  return uri;
};
