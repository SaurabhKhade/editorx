import Editor from "./Editor";
import Sidebar from "./Sidebar";
import Executer from "./Executer";
import Home from "./Home";
import Pallet from "./Pallet";
import { useFileSystem } from "./hooks";
import { useEffect } from "react";
import {messaging,onMessage} from './firebase';
import "./App.css";

export default function App() {
  const { files, loadedFile, updateFile } = useFileSystem();
  
  useEffect(()=>{
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
    });
  },[]);

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

