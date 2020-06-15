import axios from "axios";

const myIP = "172.20.10.2";
const port = "5000";

const instance = axios.create({
  baseURL: "http://" + myIP + ":" + port,
  withCredentials: true,
});

export default instance;
