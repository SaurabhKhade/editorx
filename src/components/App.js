import Editor from './Editor';
import {useState} from 'react';
import Sidebar from './Sidebar';
import Executer from './Executer';
import Home from './Home';
import Pallet from './Pallet';
import {useFileSystem} from './hooks';
import "./App.css";


export default function App() {
  let [open,setOpen] = useState(false);
  const {files,loadedFile,updateFile} = useFileSystem();
  
  function toggle() {
    setOpen(old=>!old);
  }
  
  return (
    <>
      <Executer />
      <div className="editor-wrapper">
        {
          loadedFile?
          <>
          <Pallet />
          <Editor {...(files[loadedFile])} handleChange={updateFile}/>
          </>:
          <Home />
        }
      </div>
      <Sidebar open={open}/>
      <button style={sidebar} onClick={toggle}>Sidebar Open/Close</button>  
    </>
  );
}

const sidebar = {
  padding: '10px',
  fontSize: '18px',
  fontWeight: 'bold',
  position: 'fixed',
  bottom: '0',
  zIndex: '100'
}