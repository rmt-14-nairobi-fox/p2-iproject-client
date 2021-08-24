import axios from "axios";

const localhost = axios.create({
  baseURL: "http://localhost:6969",
});
// const localhost = axios.create({
//   baseURL: "https://h8blog-admin-page.herokuapp.com",
// });
export default localhost;
