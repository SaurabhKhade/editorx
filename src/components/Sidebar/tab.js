import {useState} from 'react';
import './tab.css';

export default function Tab({caption,children,childs}) {
  
  const [open,setOpen] = useState(false);
  const height = 40;
  const style = {
    height: `${open?(height*(childs+1)):height}px`
  }
  
  const arrow = {
    transform: `rotate(${open?90:0}deg)`,
    transition: 'transform .1s ease'
  }
  
  return (
    <div className="tab" style={style}>
      <p onClick={()=>setOpen(old=>!old)} className='tab-label'>
        <span style={arrow}>&gt;</span>&nbsp;&nbsp;
        {caption}
      </p>
      <div className="tab-hidden">
        {children}
      </div>
    </div>
  )
}