<template>
  <div id="app">
    <NavBarPage></NavBarPage>
    <!-- <div id="nav">

      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script>
import NavBarPage from "./components/navbar.vue"
export default {
  components:{
    NavBarPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background-color: #212529;
}
.banner {
  background: url("./assets/1.png") no-repeat center center;
  background-size: cover;
  padding-top: 10%;
  padding-bottom: 20%;
  color: #fff;
  height: 500px;
}
.anime {
  font-size: 120px;
  text-shadow: 2px 3px #474747;
}
.jumbotron-tag p {
  font-size: 16px;
  text-shadow: 2px 1px #474747;
}
.form-login {
  height: 900px;
  padding-top: 20%;
  background: url("./assets/jumbotron.png") no-repeat center center;
}
/* form{

} */
.form-cl {
  width: 600px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid rgb(255, 255, 255);
  color: #fff;
  font-size: 24px;
  margin-bottom: 16px;
}
.form-login input {
  height: 45px;
}

.form-login .submit {
  background-color: #ff5722;
  border-color: transparent;
  color: #fff;
  font-size: 20px;
  letter-spacing: 2px;
  height: 50px;
  margin-top: 20px;
}
.form-login .submit:hover {
  background-color: #f44336;
  cursor: pointer;
}
.form-login ::placeholder {
  color: rgb(243, 243, 243);
}
.form-register {
  height: 900px;
  padding-top: 20%;
  background: url("./assets/1.png") no-repeat center center;
  text-shadow: 2px 1px #474747;
}
.form-register input {
  height: 45px;
}

.form-register .submit {
  background-color: #ff5722;
  border-color: transparent;
  color: #fff;
  font-size: 20px;
  letter-spacing: 2px;
  height: 50px;
  margin-top: 20px;
}
.form-register .submit:hover {
  background-color: #f44336;
  cursor: pointer;
}
.form-register ::placeholder {
  color: rgb(243, 243, 243);
}
.form-register .jumbotron-tag p {
  font-size: 22px;
  text-shadow: 2px 1px #474747;
}
.form-banner {
  color: white;
}
.form-banner .submit {
  background-color: #ff5722;
  border-color: transparent;
  color: #fff;
  font-size: 20px;
  letter-spacing: 2px;
  height: 50px;
  margin-top: 20px;
}
.form-banner .submit:hover {
  background-color: #f44336;
  cursor: pointer;
}
.form-banner ::placeholder {
  color: rgb(243, 243, 243);
}
.form-banner .jumbotron-tag p {
  font-size: 22px;
  text-shadow: 2px 1px #474747;
}
.content {
  margin: 8%;
  background-color: #8a8a8a;
  padding: 1rem 2rem 1rem 2rem;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
  color: #ffffff;
}
.content button {
  background-color: #464646;
  border-color: #474747;
  border: 2px solid #eceded;
  color: #fff;
  font-size: 20px;
  letter-spacing: 2px;
  height: 50px;
  margin-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
}
.content img {
  border: 2px solid #ffffff;
}
.content .box-content {
  border: 2px solid #ffffff;
}
.content ul {
  list-style: none;
}
.absolute {
  bottom: -10px;
  position: relative;
}
.head-search {
  padding-top: 50px;
  padding-bottom: 40px;
}
.head-search h1 {
  color: #888;
  font-size: 42px;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
}
.head-search strong {
  color: #313131;
}
.head-search h1:hover {
  color: #313131;
}
.head-search .search-box {
  display: flex;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
}
.head-search .search-field {
  appearance: none;
  background: none;
  border: none;
  outline: none;
  background-color: #f3f3f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: blok;
  width: 100%;
  max-width: 600px;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  transition: 0.4s;
}
.head-search .search-field::placeholder {
  color: #aaa;
}
.head-search .search-field:focus {
  color: #fff;
  background-color: #313131;
}
main {
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 30px;
  padding-right: 30px;
}
main .cards {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}
.cards a {
  text-decoration: none;
}
.card-anime {
  text-align: center;
  flex: 1px 1px 33%;
  padding: 0 8px;
  margin-bottom: 16%;
}
.card-anime img {
  border: 3px solid #888;
  width: 100%;
  height: 300px;
  object-fit: cover;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  transition: 0.4s;
}
.card-anime h3 {
  padding: 16px;
  color: #888;
  transition: 0.4s;
}
.card-anime :hover h3 {
  color: #888;
  color: #313131;
}

</style>
