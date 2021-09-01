
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAbH8HzY5VwgSM0OBNjymkgGexS6z8qHE8",
  authDomain: "editorx-28163.firebaseapp.com",
  projectId: "editorx-28163",
  storageBucket: "editorx-28163.appspot.com",
  messagingSenderId: "42380724238",
  appId: "1:42380724238:web:b8b34272b57a9c46ccd45f",
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

getToken(messaging, {
  vapidKey:
    "BAKAPVbQoxbMnNW_J4Pt3Q-mKoLx-74d64DtbPBIkWUimStrDrPUyZ7rl_URh-uSSGQpAU2zvRXhEYOxU7Au29Y",
})
  .then((currentToken) => {
    if (currentToken) return;
    else {
      console.warn(
        "No registration token available. Request permission to generate one."
      );
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
  });

  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  });
