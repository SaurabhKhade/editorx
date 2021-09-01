import Editor from "./Editor";
import Sidebar from "./Sidebar";
import Executer from "./Executer";
import Home from "./Home";
import Pallet from "./Pallet";
import { useFileSystem } from "./hooks";
import { useEffect } from "react";
// import { messaging, onMessage } from "./firebase";
import "./App.css";


// const messaging = getMessaging();


export default function App() {
  const { files, loadedFile, updateFile } = useFileSystem();

  useEffect(() => {
    
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
