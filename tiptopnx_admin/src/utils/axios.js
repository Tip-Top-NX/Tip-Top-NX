import axios from "axios";

export const myUri = "http://localhost:5000/";
// export const myUri = "https://tiptop-nx.herokuapp.com/";

const instance = axios.create({
  baseURL: myUri,
  withCredentials: false,
});

export default instance;
