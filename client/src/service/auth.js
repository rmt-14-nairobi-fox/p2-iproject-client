import firebase from "firebase";
import axios from "axios"
import router from "../router";

const socialMediaAuth = (provider) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;

        console.log('User', user.email, 'Token::', token)
        axios.post(`http://localhost:3000/api/v1/user/employee/github`, {
            username: user.email,
            email: user.email,
            password: token,
        })
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('token', res.data)
                router.push('/home')
            })
            .catch((e) => console.log(e));

      })
      .catch((error) => {
        console.log(error)
      });
}

export default socialMediaAuth