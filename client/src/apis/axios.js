import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

// const instance = axios.create({
//   baseURL: "https://adopt-adopt-me.herokuapp.com/",
// });

export default instance;
