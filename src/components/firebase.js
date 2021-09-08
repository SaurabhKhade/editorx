import firebase from 'firebase/app';
import 'firebase/messaging';

let messaging;

try {
  const config = {
    apiKey: "AIzaSyAbH8HzY5VwgSM0OBNjymkgGexS6z8qHE8",
    authDomain: "editorx-28163.firebaseapp.com",
    projectId: "editorx-28163",
    storageBucket: "editorx-28163.appspot.com",
    messagingSenderId: "42380724238",
    appId: "1:42380724238:web:b8b34272b57a9c46ccd45f",
  };
  
  firebase.initializeApp(config);
  messaging = firebase.messaging();
} catch (e) {}

export {messaging};