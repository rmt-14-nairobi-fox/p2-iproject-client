import axios from "axios";

const localhost = axios.create({
  baseURL: "http://localhost:3333",
});
// const localhost = axios.create({
//   baseURL: "https://h8blog-admin-page.herokuapp.com",
// });
export default localhost;
