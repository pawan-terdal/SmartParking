/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDh3ksCXbhzEWhpdrGMxyhriztT1WqxG4Y",
    authDomain: "smartparking-e5020.firebaseapp.com",
    databaseURL: "https://smartparking-e5020.firebaseio.com",
    projectId: "smartparking-e5020",
    storageBucket: "smartparking-e5020.appspot.com",
    messagingSenderId: "59091243771"
  };
  firebase.initializeApp(config);
  const dbConn = firebase.firestore();
  export default dbConn;

