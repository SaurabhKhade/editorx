import {useContext,useEffect,useState} from 'react';
import {editorContext,filesContext,popupContext} from './context';
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

export function useTheme() {
  const [theme,setTheme] = useState('dark');
  
  useEffect(()=>{
    let saved = localStorage.getItem("prefered-theme");
    if (saved) {
      setTheme(saved);
    } else {
      saved = 'dark';
      localStorage.setItem("prefered-theme",'dark');
    }
    document.body.setAttribute('data-theme',saved);
  },[]);

  function toggleFunction() {
    let updated = theme==='light'?'dark':'light';
    localStorage.setItem("prefered-theme",updated);
    setTheme(updated);
    document.body.setAttribute('data-theme',updated);
  }
  
  return [theme,toggleFunction];
}

export function usePopup() {
  const control = useContext(popupContext);
  return control;
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
      let {code,...rest} = makeFile(newName);
      file = {...rest,code:file.code}
      old[newName] = file;
      updateSource(old);
      if(loadedFile===oldName) setLoadedFile(newName);
      return {...(sort(old))};
    });
  }
  
  function deleteFile(name) {
    setFiles(old=>{
      delete old[name];
      return {...old};
    });
    if (name===loadedFile) setLoadedFile(undefined);
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