import { useFileSystem } from "../hooks";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import fileDetector from "../file-detector";
import axios from "axios";
import "./executer.css";

export default function Exec() {
  console.log("reload");
  const { files, loadedFile } = useFileSystem();
  const [show, setShow] = useState(true);
  const [inputBox, setInputBox] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (whichLang(loadedFile)) setShow(true);
    else setShow(false);
    // setInputBox(false);
  }, [loadedFile]);

  function execute() {
    let code = files[loadedFile].code;
    let language = whichLang(loadedFile);
    let stdin = input;
    let payload = {
      code,
      language,
      input: stdin,
    };
    console.log("Here");
    request(payload);
    setOutput("waiting");
  }

  return show ? (
    <>
      <div className="run-btn" onClick={() => setInputBox(true)}>
        <FaPlay />
      </div>
      {inputBox ? (
        <div className="exec-input">
          <label htmlFor="std-in">STDIN</label>
          <textarea
            rows="5"
            id="std-in"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={execute}>Run</button>
          <label htmlFor="std-out">STDIN</label>
          <textarea rows="10" id="std-out" value={output} readOnly />
          <button onClick={() => setInputBox(false)}>Close</button>
        </div>
      ) : (
        <></>
      )}
    </>
  ) : (
    <></>
  );
}

function whichLang(name) {
  if (name === undefined) return;
  return fileDetector(name).name;
}

function request(data) {
  console.log(data);

  const config = {
    method: "post",
    url: "https://codexweb.netlify.app/.netlify/functions/enforceCode",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };

  axios(config)
    .then(function (response) {
      console.log("response" + response);
    })
    .catch(function (error) {
      console.error(error);
    });
}
