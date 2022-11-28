import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//Initialize firebase
const firebaseConfig ={
  apiKey: "AIzaSyAzCNzwFY1j8Ef8GrPsiKSEoq2Ea5JHUGU",
  authDomain: "idiot-sandwich.firebaseapp.com",
  projectId: "idiot-sandwich",
  storageBucket: "idiot-sandwich.appspot.com",
  messagingSenderId: "672408031000",
  appId: "1:672408031000:web:dc8e5886e8546ba7b0586d",
  measurementId: "G-1EF2YXXW5M"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

function App() {
  return (
    <MainContainer/>
  );
}

export default App;
