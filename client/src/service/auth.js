import firebase from "firebase";

const socialMediaAuth = (provider) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;

        console.log('User', user, 'Token::', token)
      }).catch((error) => {
        console.log(error)
      });
}

export default socialMediaAuth