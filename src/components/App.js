import Editor from './Editor';
import {useState} from 'react';
import Sidebar from './Sidebar';
import Executer from './Executer';
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
          loadedFile?<Editor {...(files[loadedFile])} handleChange={updateFile}/>:
          <NoFile />
        }
      </div>
      <Sidebar open={open}/>
      <button style={sidebar} onClick={toggle}>Sidebar Open/Close</button>  
    </>
  );
}

function NoFile() {

  return (
    <div className="no-file">
      <h4>Welcome to</h4>
      <h1>EditorX</h1>
      <p>Farhan and Malhar please suggest something to write here, the full page should be filled. </p>
      <p>Write something like how to use this editor and related to it</p>
      <p>Use lists etc to make it look better</p>
    </div>
  )
}

const sidebar = {
  padding: '10px',
  fontSize: '18px',
  fontWeight: 'bold',
  position: 'fixed',
  bottom: '0',
  zIndex: '100'
}