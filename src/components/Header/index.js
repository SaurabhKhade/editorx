import './header.css';
import {useFileSystem,usePopup} from '../hooks';
import {HiDotsVertical} from 'react-icons/hi';

export default function Header() {
  const {files,loadedFile} = useFileSystem();
  const [,setPopup] = usePopup();
  const language = files[loadedFile].language;
  
  return (
    <div className="header">
      <div>
        <p>{loadedFile}</p>
        <span>{language}</span>
      </div>
      <HiDotsVertical className="icons" onClick={()=>setPopup(loadedFile)}/>
    </div>
  );
}