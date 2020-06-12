import axios from "axios";

const myIP = "192.168.43.208";
const port = "5000";

const instance = axios.create({
  baseURL: "http://"+myIP+":"+port,
  withCredentials: true,
});

export default instance;