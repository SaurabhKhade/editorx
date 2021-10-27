import { useState } from "react";
import "./tab.css";
import {FaChevronRight} from "react-icons/fa"

export default function Tab({ caption, children, childs, setVisible, DataManager }) {
  const [open, setOpen] = useState(false);
  const height = 40;
  const style = {
    height: `${open ? height * (childs + 1) : height}px`,
  };

  const arrow = {
    transform: `rotate(${open ? 90 : 0}deg)`,
    transition: "transform .1s ease",
    opacity: caption==="Backup or Restore"?"0":"1"
  };

  function clickHandler() {
    setOpen((old) => !old);
    DataManager && setVisible(old=>!old);
  }

  return (
    <div className="tab" style={style}>
      <p onClick={clickHandler} className="tab-label">
        <span style={arrow}><FaChevronRight/></span>&nbsp;&nbsp;
        {caption}
      </p>
      <div className="tab-hidden">{children}</div>
    </div>
  );
}
