import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC-e8qbPeV9Niesegb7i5NJqO8FU-BVbvw",
  authDomain: "collegeweb-project.firebaseapp.com",
  databaseURL: "https://collegeweb-project.firebaseio.com",
  projectId: "collegeweb-project",
  storageBucket: "collegeweb-project.appspot.com",
  messagingSenderId: "411622229364",
  appId: "1:411622229364:web:d3934f633fd4a7fbbed821",
  measurementId: "G-Z2ZEQW15PP",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, db, auth };
