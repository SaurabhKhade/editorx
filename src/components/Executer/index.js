import { useFileSystem } from "../hooks";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import fileDetector from "../file-detector";
import axios from "axios";
import "./executer.css";

export default function Exec() {
  const { files, loadedFile } = useFileSystem();
  const [show, setShow] = useState(true);
  const [inputBox, setInputBox] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (whichLang(loadedFile)) setShow(true);
    else setShow(false);
  }, [loadedFile]);

  function execute() {
    let code = files[loadedFile].code;
    let language = whichLang(loadedFile);
    let stdin = input;
    let payload = {
      code,language,input:stdin
    };
    setOutput('waiting...');
    request(payload)
    .then(output=>setOutput(output));
  }
  
  return show?(
    <>
    <div className="run-btn" onClick={()=>setInputBox(true)}>
        <FaPlay />
    </div>
    {inputBox?
    <div className="exec-input">
      <label htmlFor="std-in">STDIN</label>
      <textarea rows="5" id="std-in" value={input} onChange={e=>setInput(e.target.value)}/>
      <button onClick={execute}>Run</button>
      <label htmlFor="std-out">STDIN</label>
      <textarea rows="10" id="std-out" value={output} readOnly/>
      <button onClick={()=>setInputBox(false)}>Close</button>
    </div>:<></>
    }
    </>) : (<></>);
}

function whichLang(name) {
  if (name !== undefined) return fileDetector(name).name;
}

async function request(data) {
  
  const url = "https://editorx-api.vercel.app/execute";
  
  const config = {
    method: 'POST',
    url,
    headers: { 
      'Content-Type': 'application/json'
    },
    data
  }

  let res = await axios(config);
  
  if(res.data.status === 'success') {
    return res.data.output;
  } else {
    return res.data.message;
  }
}
