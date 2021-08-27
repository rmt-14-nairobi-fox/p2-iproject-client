import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAfzvREFILFLFAZkaz5HxdX6MdGWAQISmg",
    authDomain: "freelance-app-1a92f.firebaseapp.com",
    projectId: "freelance-app-1a92f",
    storageBucket: "freelance-app-1a92f.appspot.com",
    messagingSenderId: "521478147102",
    appId: "1:521478147102:web:e7ff67f004817248db320f",
    measurementId: "G-29LPVB0BSW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase