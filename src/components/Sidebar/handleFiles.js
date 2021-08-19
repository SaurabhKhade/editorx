import {useEffect,useState} from 'react';
import {useFileSystem} from '../hooks';

export default function HandleFiles({setChilds}) {
  
  const system = useFileSystem();
  useEffect(()=>{
    let childs = Object.keys(system.files).length;
    setChilds(childs+1);
  // eslint-disable-next-line
  },[system.files]);
  
  return (
    <>
      <CreateFiles create={system.addFile}/>
      {Object.keys(system.files).map(item=><MakeItem key={item} file={item} files={system.files} />)}
    </>
  )
}

function CreateFiles({create}) {
  
  const [open,setOpen] = useState(false);
  const [fileName,setFileName] = useState('');
  
  const label = {
    display: open?'none':'block'
  };
  const field = {
    display: open?'block':'none'
  };
  
  function submit() {
    setFileName("");
    create(fileName);
  }
  
  return (
    <div 
      className="addFile">
      <div 
        style={label}
        onClick={()=>setOpen(true)}>
        <span>Add new File</span>
      </div>
      <div style={field}>
        <input 
          type="text" 
          onChange={e=>setFileName(e.target.value)}
          />
        <button onClick={submit}>
          &#10003;
        </button>
        <button onClick={()=>setOpen(false)}>
          X
        </button>
      </div>
    </div>
  );
}

function MakeItem({file,files}) {
  
  return (
    <div className="file-name">
      <div>
        <img src={process.env.PUBLIC_URL +files[file].logo} alt={files[file].language}/>
        <p>{file}</p>
      </div>
      <span>&#9881;</span>
    </div>
  );
}