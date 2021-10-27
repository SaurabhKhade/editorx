import React, {
  createContext,
  useState,
  useEffect
} from 'react';

export default ContextProvider;
export const editorContext = createContext();
export const filesContext = createContext();
export const popupContext = createContext();
export const palletContext = createContext();

function EditorContext({children}) {
  const [config,setConfig] = useState(defaultConfig);
  useEffect(()=>{
    let saved = localStorage.getItem("editorConfig");
    if (saved) {
      saved = JSON.parse(saved);
      setConfig(saved);
    }
  },[]);
  
  return (
    <editorContext.Provider value={[config,setConfig]}>
      {children}
    </editorContext.Provider>
  );
}

function FilesContext({children}) {
  const [files,setFiles] = useState({});
  const [loadedFile,setLoadedFile] = useState(undefined);
  
  useEffect(()=>{
    let saved = localStorage.getItem("userFiles");
    if (saved) {
      saved = JSON.parse(saved);
      setFiles(saved);
    }
  },[]);
  
  return (
    <filesContext.Provider value={[files,setFiles,loadedFile,setLoadedFile]}>
      {children}
    </filesContext.Provider>
  );
}

function PopupContext({children}) {
  
  const control = useState(undefined);
  
  return (
    <popupContext.Provider value={control}>
      {children}
    </popupContext.Provider>
  );
}

function PalletContext({children}) {
  
  const control = useState([]);
  
  return (
    <palletContext.Provider value={control}>
      {children}
    </palletContext.Provider>
  );
}

function ContextProvider({children}) {
  return (
    <EditorContext>
      <FilesContext>
        <PopupContext>
          <PalletContext>
            {children}  
          </PalletContext>
        </PopupContext>
      </FilesContext>
    </EditorContext>
  )
}

const defaultConfig = {
  theme: "chaos",
  fontSize: 14,
  showGutter: true,
  highlightActiveLine: true,
  keyboardHandler: "vscode",
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  tabSize: 2,
  wrapEnabled: false,
  style: {
    fontFamily: 'Fira Code'
  },
  setOptions: {
    highlightSelectedWord: true,
    readOnly: false,
    cursorStyle: 'ace',
    enableMultiselect: true,
    useWorker: false
  }
};