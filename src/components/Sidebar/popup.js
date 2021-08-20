import './popup.css';
import {FaDownload,FaEdit,FaWindowClose} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';
import {usePopup,useFileSystem} from '../hooks';
import {useState} from 'react';

export default function Popup() {
  
  const [file,setFile] = usePopup();
  const {files,deleteFile,renameFile} = useFileSystem();
  const [renameOpen,setRenameOpen] = useState(false);
  const [newName,setNewName] = useState('');
  
  const style = {
    display: file?'block':'none'
  };
  
  const renameBar = {
    height: renameOpen?'35px':'0',
    marginTop: renameOpen?'10px':'0'
  };
  
  function deleteFunc() {
    let ch = window.confirm(`Are you really want to delete ${file} file?`);
    if (ch) {
      deleteFile(file);
      setFile(undefined);
    }
  }
  
  function renameFunc() {
    let ch = window.confirm(`Are you really want to rename file ${file} as ${newName}?`);
    if (ch) {
      renameFile(file,newName)
      setFile(undefined);
      setNewName('');
      setRenameOpen(false);
    }
  }
  
  function downloadFunc() {
    download(file,files[file].code);
  }
   
  return (
    <div className="popup" style={style}>
      <h3>{file}</h3>
      <div>
        <button 
          className="warn-btn"
          onClick={()=>setRenameOpen(old=>!old)}>
          <FaEdit />
        </button>
        <button 
          className="download-btn"
          onClick={downloadFunc}>
          <FaDownload />
        </button>
        <button 
          className="delete-btn"
          onClick={deleteFunc}>
          <MdDelete />
        </button>
        <button 
          className="close-btn"
          onClick={()=>setFile(undefined)}>
          <FaWindowClose />
        </button>
      </div>
      <div 
        className="rename"
        style={renameBar}>
        <input 
          type="text" 
          placeholder="Enter New Name"
          value={newName}
          onChange={e=>setNewName(e.target.value)}/>
        <button 
          className="warn-btn"
          onClick={renameFunc}>
          &#10003;
        </button>
      </div>
    </div>
  );
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}