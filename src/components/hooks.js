import {useContext} from 'react';
import {editorContext} from './context';

export function useConfig() {
  const [config,setConfig] = useContext(editorContext);
  
  function setFunction(update) {
    let updated = {...config,...update};
    localStorage.setItem("editorConfig",JSON.stringify(updated));
    setConfig(updated);
  }
  
  return [config,setFunction];
}