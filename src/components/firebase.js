import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
  apiKey: "AIzaSyAbH8HzY5VwgSM0OBNjymkgGexS6z8qHE8",
  authDomain: "editorx-28163.firebaseapp.com",
  projectId: "editorx-28163",
  storageBucket: "editorx-28163.appspot.com",
  messagingSenderId: "42380724238",
  appId: "1:42380724238:web:b8b34272b57a9c46ccd45f",
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

export {messaging};