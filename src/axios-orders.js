import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-1d52d.firebaseio.com/",
});

export default instance;
