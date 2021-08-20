import {useState} from 'react';
import './tab.css';

export default function Tab({caption,children,childs}) {
  
  const [open,setOpen] = useState(false);
  
  const style = {
    height: `${open?(40*(childs+1)):40}px`
  }
  
  const arrow = {
    transform: `rotate(${open?90:0}deg)`,
    transition: 'transform .1s ease'
  }
  
  return (
    <div className="tab" style={style}>
      <p onClick={()=>setOpen(old=>!old)}>
        <span style={arrow}>&gt;</span>&nbsp;&nbsp;
        {caption}
      </p>
      <div className="tab-hidden">
        {children}
      </div>
    </div>
  )
}