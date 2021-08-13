import Editor from './Editor';
import {useState} from 'react';
import "./App.css";

export default function App() {
  let [lang,setLang] = useState("c_cpp");
  let [theme,setTheme] = useState("monokai");
  
  return (
    <div className="App">
      <div className="editor-wrapper">
        <Editor lang={lang} theme={theme}/>
      </div>
      
      
      {/*Unwanted*/}
      <h3>Some Langs</h3>
      <button onClick={()=>setLang("c_cpp")}>C/CPP</button>
      <button onClick={()=>setLang("java")}>Java</button>
      <button onClick={()=>setLang("python")}>Python</button>
      <button onClick={()=>setLang("javascript")}>JavaScript</button>
      <button onClick={()=>setLang("html")}>HTML</button>
      <button onClick={()=>setLang("css")}>CSS</button>
      
      <h3>Some Themes</h3>
      <button onClick={()=>setTheme("xcode")}>Xcode</button>
      <button onClick={()=>setTheme("github")}>Github</button>
      <button onClick={()=>setTheme("chrome")}>Chrome</button>
      <button onClick={()=>setTheme("monokai")}>Monokai</button>
      <button onClick={()=>setTheme("dracula")}>Dracula</button>
      <button onClick={()=>setTheme("terminal")}>Terminal</button>
    </div>
  );
}