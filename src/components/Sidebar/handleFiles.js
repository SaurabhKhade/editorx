import { useEffect, useState } from "react";
import { useFileSystem, usePopup, usePallet } from "../hooks";
import { IoSettingsSharp } from "react-icons/io5";
import "./file-system.css";

export default function HandleFiles({ setChilds,sidebarOpen}) {
  const system = useFileSystem();
  const [, setPopup] = usePopup();
  const[,setPallet] = usePallet();

  useEffect(() => {
    let childs = Object.keys(system.files).length;
    setChilds(childs + 1);
    // eslint-disable-next-line
  }, [system.files]);
  
  function loader(file) {
    system.setLoadedFile(file);
    setPallet(old=>{
      if (!old.includes(file)) {
        return [...old,file];
      }
      return old;
    });
    sidebarOpen(false);
  }

  return (
    <>
      <CreateFiles create={system.addFile} />
      {Object.keys(system.files).map((item) => (
        <MakeItem
          key={item}
          file={item}
          files={system.files}
          loader={loader}
          setPopup={setPopup}
        />
      ))}
    </>
  );
}

function CreateFiles({ create }) {
  const [open, setOpen] = useState(false);
  const [fileName, setFileName] = useState("");

  const label = {
    display: open ? "none" : "block",
  };
  const field = {
    display: open ? "block" : "none",
  };

  function submit() {
    setFileName("");
    create(fileName);
  }

  return (
    <div className="addFile">
      <div style={label} onClick={() => setOpen(true)} className="label">
        <p>Add new File</p>
      </div>
      <div style={field} className="field">
        <input type="text" onChange={(e) => setFileName(e.target.value)} />
        <button onClick={submit}>&#10003;</button>
        <button onClick={() => setOpen(false)}>X</button>
      </div>
    </div>
  );
}

function MakeItem({ file, files, loader, setPopup }) {
  return (
    <div className="file-name">
      <div
        onClick={() => {
          loader(file);
        }}
      >
        <img src={process.env.PUBLIC_URL + files[file].logo} alt="" />
        <p>{file}</p>
      </div>
      <span onClick={() => setPopup(file)}>
        <IoSettingsSharp />
      </span>
    </div>
  );
}
