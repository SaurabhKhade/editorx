import { useState } from "react";
import "./tab.css";

export default function Tab({ caption, children, childs, notify }) {
  const [open, setOpen] = useState(false);
  const height = 40;
  const style = {
    height: `${open ? height * (childs + 1) : height}px`,
  };

  const arrow = {
    transform: `rotate(${open ? 90 : 0}deg)`,
    transition: "transform .1s ease",
  };

  function clickHandler() {
    if (notify)
      return alert(
        "Kindly Allow notifications so we can inform you about the updates in future."
      );
    setOpen((old) => !old);
  }

  return (
    <div className="tab" style={style}>
      <p onClick={clickHandler} className="tab-label">
        <span style={arrow}>&gt;</span>&nbsp;&nbsp;
        {caption}
      </p>
      <div className="tab-hidden">{children}</div>
    </div>
  );
}
