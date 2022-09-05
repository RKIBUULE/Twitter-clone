import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDGtK_lB3GjG1nRRcuBpMCX9Q9u6ulajGA",
    authDomain: "twitter-clone-c811f.firebaseapp.com",
    projectId: "twitter-clone-c811f",
    storageBucket: "twitter-clone-c811f.appspot.com",
    messagingSenderId: "1045581268995",
    appId: "1:1045581268995:web:ed468673603c9f99f22636",
    measurementId: "G-J0610MPW27"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db;