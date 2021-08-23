import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCvPMrgm7HyxpVoCDBGPUATY2CbchVzcNQ",
    authDomain: "todotask-38a79.firebaseapp.com",
    projectId: "todotask-38a79",
    storageBucket: "todotask-38a79.appspot.com",
    messagingSenderId: "541674811836",
    appId: "1:541674811836:web:eca80f9f29f22d0a2ebbb9"
  };
  // Initialize Firebase
export const db =  firebase.initializeApp(firebaseConfig).firestore();