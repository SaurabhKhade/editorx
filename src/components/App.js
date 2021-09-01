import Editor from "./Editor";
import Sidebar from "./Sidebar";
import Executer from "./Executer";
import Home from "./Home";
import Pallet from "./Pallet";
import { useFileSystem } from "./hooks";
import { useEffect, useState } from "react";
import { messaging } from "./firebase";
import "./App.css";

export default function App() {
  const { files, loadedFile, updateFile } = useFileSystem();

  useEffect(() => {
    if (Notification.permission === "granted") {
      messaging.getToken({
        vapidKey:
          "BAKAPVbQoxbMnNW_J4Pt3Q-mKoLx-74d64DtbPBIkWUimStrDrPUyZ7rl_URh-uSSGQpAU2zvRXhEYOxU7Au29Y",
      });
      messaging.onMessage((payload) => {
        let { body, title } = payload.notification;
        notify(title, body);
      });
    }
  }, []);

  return (
    <>
      <Instruction />
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

function notify(title, body) {
  navigator.serviceWorker.getRegistration().then((reg) => {
    reg.showNotification(title, {
      body,
      icon: "/static/icon/favicon-96x96.png",
      badge: "/static/icon/badge.png",
    });
  });
}

function Instruction() {
  const [show,setShow] = useState(false);
  
  useEffect(()=>{
    let first_time = localStorage.getItem('first-time');
    if (!first_time) {
      setShow(true);
      localStorage.setItem('first-time','false');
    }
  },[]);
  
  const style = {
    display: show?'block':'none'
  };
  
  return (
    <div className="slide-instruction" onClick={()=>setShow(false)} style={style}>
      <img src="/static/images/arrow-left.png" alt="arrow left" className="arrow"/>
      <h2>Slide from right edge to left to open sidebar</h2>
    </div>
  );
}