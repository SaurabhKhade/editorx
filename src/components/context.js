import React, {
  createContext,
  useState,
  useEffect
} from 'react';

export default ContextProvider;
export const editorContext = createContext();

function EditorContext({children}) {
  const [config,setConfig] = useState({});
  useEffect(()=>{
    let saved = localStorage.getItem("editorConfig");
    if (!saved) {
      saved = "{}";
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