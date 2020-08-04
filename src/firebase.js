
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDVHFSzkDXbzVQam32ZuzGIvM63yY_rrqY",
  authDomain: "keeper-app-a26f3.firebaseapp.com",
  databaseURL: "https://keeper-app-a26f3.firebaseio.com",
  projectId: "keeper-app-a26f3",
  storageBucket: "keeper-app-a26f3.appspot.com",
  messagingSenderId: "300674705248",
  appId: "1:300674705248:web:9e3583464e518643046005",
  measurementId: "G-R52FV42GR5"
});
const  db = firebaseApp.firestore();

export default db;