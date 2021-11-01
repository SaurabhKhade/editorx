import {useFileSystem,usePallet} from '../hooks';
import { useLongPress } from 'use-long-press';

export default function File({name}) {
  
  const {loadedFile,setLoadedFile} = useFileSystem();
  const [,setPallet] = usePallet();
  
  const style = {
    backgroundColor: loadedFile===name?"hsl(40.9,100%,38.8%)":"hsl(0,0%,23%)"
  };

  const bind = useLongPress(() => {
    closeTab();
  });

  function closeTab() {
    setPallet((old) => {
      let remain = old.filter((i) => i !== name);
      if (name === loadedFile) {
        if (remain.length === 0) setLoadedFile(undefined);
        else setLoadedFile(remain[0]);
      }
      return remain;
    });
  }
  
  return (
    <div className="pallet-file"
      onClick={()=>setLoadedFile(name)}
      style={style}
      {...bind}>
      {name}
    </div>
  );
}