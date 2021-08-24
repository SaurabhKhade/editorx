import {useFileSystem} from '../hooks';
import {useState,useEffect} from 'react';
import {FaPlay} from 'react-icons/fa';
import fileDetector from '../file-detector';
import './executer.css';

export default function Exec() {
    const {files,loadedFile} = useFileSystem();
    const [show,setShow] = useState(true);
    const [inputBox,setInputBox] = useState(false);
    const [input,setInput] = useState("");
    const [output,setOutput] = useState("");

    useEffect(()=>{
        console.log(whichLang(loadedFile))
        if(whichLang(loadedFile)) setShow(true);
        else setShow(false);
        // setInputBox(false);
    },[loadedFile]);

    function execute() {
        let code = files[loadedFile].code;
        let lang = whichLang(loadedFile);
        let stdin = input;
        setOutput(JSON.stringify({code,lang,stdin}));
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
        </div>:<></>
        }

        </>
    ):<></>
}

function whichLang(name) {
    if(name===undefined) return;
    return fileDetector(name).name;
}