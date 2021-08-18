import React, {
  createContext,
  useState,
  useEffect
} from 'react';

export default ContextProvider;
export const editorContext = createContext();

function EditorContext({children}) {
  const [config,setConfig] = useState(defaultConfig);
  useEffect(()=>{
    let saved = localStorage.getItem("editorConfig");
    if (!saved) {
      saved = JSON.stringify(defaultConfig);
    }
    saved = JSON.parse(saved);
    setConfig(saved);
  },[]);
  
  return (
    <editorContext.Provider value={[config,setConfig]}>
      {children}
    </editorContext.Provider>
  );
}

function ContextProvider( {
  children
}) {
  return (
    <EditorContext>
      {children} 
    </EditorContext>
  )
}

const defaultConfig = {
  placeholder: "Start to write your code here...",
  theme: "monokai",
  onChange: ()=> {},
  fontSize: 14,
  showPrintMargin: true,
  showGutter: true,
  highlightActiveLine: true,
  keyboardHandler: "vscode",
  width: "100%",
  height: "100%",
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  tabSize: 2,
  wrapEnabled: false,
  style: {
    fontFamily: 'Fira Code'
  }
};