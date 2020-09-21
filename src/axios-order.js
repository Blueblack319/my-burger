import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-burger-6125d.firebaseio.com/",
});

export default instance;
