import {useContext} from 'react';
import {editorContext,filesContext} from './context';
import detector from './file-detector';

export function useConfig() {
  const [config,setConfig] = useContext(editorContext);
  
  function setFunction(update) {
    let updated = {...config,...update};
    localStorage.setItem("editorConfig",JSON.stringify(updated));
    setConfig(updated);
  }
  
  return [config,setFunction];
}

export function useFileSystem() {
  const [files,setFiles,loadedFile,setLoadedFile] = useContext(filesContext);
  
  function addFile(newFile) {
    let file = makeFile(newFile);
    let updated = {
      ...files,
      [newFile]: file,
    };
    updated = sort(updated);
    updateSource(updated);
    setFiles(updated);
  }
  
  function updateFile(code) {
    if (loadedFile===undefined) return;
    let current = files[loadedFile];
    current.code=code;
    
    setFiles(old=>{
      old[loadedFile] = current;
      updateSource(old);
      return {...old};
    });
  }
  
  function renameFile(oldName,newName) {
    setFiles(old=>{
      let file = old[oldName];
      delete old[oldName];
      old[newName] = file;
      return {...(sort(old))};
    });
  }
  
  function deleteFile(name) {
    setFiles(old=>{
      delete old[name];
      return {...old};
    });
  }
  
  return {files,loadedFile,setLoadedFile,addFile,updateFile,renameFile,deleteFile};
}

function updateSource(update) {
  localStorage.setItem("userFiles",JSON.stringify(update));
}

function sort(obj) {
  return Object.keys(obj).sort().reduce(function (result, key) {
    result[key] = obj[key];
    return result;
  }, {});
}

function makeFile(name) {
  let fileObj = detector(name);
  return {...fileObj,code: ''};
}

// [name]: {
//   language: 'xyz',
//   logo: 'static/xyz.png',
//   placeholder: 'blah blah',
//   code: 'xyz.print("hello")',
// }