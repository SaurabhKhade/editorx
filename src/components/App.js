import Editor from "./Editor";
import Sidebar from "./Sidebar";
import Executer from "./Executer";
import Home from "./Home";
import Pallet from "./Pallet";
import { useFileSystem } from "./hooks";
import { useEffect } from "react";
import {messaging} from "./firebase";
import "./App.css";

export default function App() {
  const { files, loadedFile, updateFile } = useFileSystem();

  useEffect(() => {
    messaging.getToken({vapidKey: "BAKAPVbQoxbMnNW_J4Pt3Q-mKoLx-74d64DtbPBIkWUimStrDrPUyZ7rl_URh-uSSGQpAU2zvRXhEYOxU7Au29Y"})
    .then(token=>{
      document.body.prepend(token)
    });
    messaging.onMessage((payload) => {
      let {body,title} = payload.notification;
      notify(title,body);
    });
  }, []);

  return (
    <>
      <Executer />
      {loadedFile ? (
        <>
          <Pallet />
          <div className="editor-wrapper">
            <Editor {...files[loadedFile]} handleChange={updateFile} />
          </div>
        </>
      ) : (
        <Home />
      )}
      <Sidebar />
    </>
  );
}

function notify(title,body) {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration()
    .then(reg => {
      reg.showNotification(title,{
        body,
        icon: '/static/icon/favicon-96x96.png',
        badge: '/static/icon/badge.png'
      });
    });
  }
}