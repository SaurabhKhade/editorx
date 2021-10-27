//non components
import "./App.css";
import { useFileSystem,usePallet } from "./hooks";
import { useEffect, useState } from "react";
import loadable from "@loadable/component";

//components
const Editor = loadable(() => import("./Editor"));
const Sidebar = loadable(() => import("./Sidebar"));
const Executer = loadable(() => import("./Executer"));
const Home = loadable(() => import("./Home"));
const Pallet = loadable(() => import("./Pallet"));
const Header = loadable(() => import("./Header"));

export default function App() {
  const { files, loadedFile, setLoadedFile, updateFile } = useFileSystem();

  return (
    <>
      <Instruction setLoadedFile={setLoadedFile} />
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

function Instruction({setLoadedFile}) {
  const [show, setShow] = useState(false);
  const[,setPallet] = usePallet();

  useEffect(() => {
    let current_file = sessionStorage.getItem("current-file");
    console.log(current_file);
    if (current_file) {
      setLoadedFile(current_file);
      setPallet([current_file]);
    }
    let first_time = localStorage.getItem("first-time");
    if (!first_time) {
      setShow(true);
      localStorage.setItem("first-time", "false");
    }
    // eslint-disable-next-line
  }, []);

  const style = {
    display: show ? "block" : "none",
  };

  return (
    <div
      className="slide-instruction"
      onClick={() => setShow(false)}
      style={style}
    >
      <img
        src="/static/images/arrow-left.png"
        alt="arrow left"
        className="arrow"
      />
      <h2>Slide from right edge to left to open sidebar</h2>
    </div>
  );
}
