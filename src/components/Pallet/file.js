import {useFileSystem} from '../hooks';

export default function File({name}) {
  
  const {setLoadedFile} = useFileSystem();
  
  return (
    <div className="pallet-file"
      onClick={()=>setLoadedFile(name)}>
      {name}
    </div>
  );
}