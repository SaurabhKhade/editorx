import {useFileSystem} from '../hooks';

export default function File({name}) {
  
  const {loadedFile,setLoadedFile} = useFileSystem();
  
  const style = {
    backgroundColor: loadedFile===name?"hsl(40.9,100%,38.8%)":"hsl(0,0%,23%)"
  };
  
  return (
    <div className="pallet-file"
      onClick={()=>setLoadedFile(name)}
      style={style}>
      {name}
    </div>
  );
}