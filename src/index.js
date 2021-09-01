import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Context from "./components/context";
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, getToken } from "firebase/messaging";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);

// if (process.env.NODE_ENV === 'production') {
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(() => console.log("success"))
      .catch((e) => console.error(e));
  });
}
// }
Notification.requestPermission();