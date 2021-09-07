//non components
import "./App.css";
import { useFileSystem } from "./hooks";
import { useEffect, useState } from "react";
import { messaging } from "./firebase";
import loadable from '@loadable/component';

//components
const Editor = loadable(() => import('./Editor'));
const Sidebar = loadable(() => import('./Sidebar'));
const Executer = loadable(() => import('./Executer'));
const Home = loadable(() => import('./Home'));
const Pallet = loadable(() => import('./Pallet'));
const Header = loadable(() => import('./Header'));


export default function App() {
  const { files, loadedFile, updateFile } = useFileSystem();
  
  useEffect(() => {
    if (Notification.permission === "granted") {
      messaging.getToken({
        vapidKey:
          "BAKAPVbQoxbMnNW_J4Pt3Q-mKoLx-74d64DtbPBIkWUimStrDrPUyZ7rl_URh-uSSGQpAU2zvRXhEYOxU7Au29Y",
      })
      .catch(e=>{
        alert("Your browser doesn't support notifications.");
      });
      messaging.onMessage((payload) => {
        let { body, title, tag } = payload.notification;
        notify(title, body, tag);
        console.log(tag);
      });
    }
  }, []);

  return (
    <>
      <Instruction />
      <Executer />
      {loadedFile ? (
        <>
          <Header />
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

function notify(title, body, tag) {
  navigator.serviceWorker.getRegistration().then((reg) => {
    reg.showNotification(title, {
      body,
      icon: "/static/icon/favicon-96x96.png",
      badge: "/static/icon/badge.png",
      tag,
      vibrate: [100, 50, 100]
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