import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Context from "./components/context";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/serviceWorker.js").catch((e) => e);
    });
  }
}
// else {
//   if ("serviceWorker" in navigator) {
//     window.addEventListener("load", () => {
//       navigator.serviceWorker
//         .register("/serviceWorker-dev.js")
//         .catch((e) => e);
//     });
//   }
// }
