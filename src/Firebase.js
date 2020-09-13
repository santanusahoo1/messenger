import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAWJifw7oLN6uLgzU29b_MXNC80c8hKRB8",
    authDomain: "facebook-messenger-1c957.firebaseapp.com",
    databaseURL: "https://facebook-messenger-1c957.firebaseio.com",
    projectId: "facebook-messenger-1c957",
    storageBucket: "facebook-messenger-1c957.appspot.com",
    messagingSenderId: "526374437778",
    appId: "1:526374437778:web:ad79c329413e715bb1774b",
    measurementId: "G-WE5RE9JESL"
});

const db = firebaseApp.firestore();

export { db };