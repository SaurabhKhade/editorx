import Editor from './Editor';
import Sidebar from './Sidebar';
import Executer from './Executer';
import Home from './Home';
import Pallet from './Pallet';
import {useFileSystem} from './hooks';
import "./App.css";


export default function App() {
  const {files,loadedFile,updateFile} = useFileSystem();
  
  return (
    <>
    <Executer />
    {
      loadedFile?
      <div className="editor-wrapper">
        <Pallet />
        <Editor {...(files[loadedFile])} handleChange={updateFile}/>
      </div>:
        <Home />
    }
    <Sidebar/>
    </>
  );
}