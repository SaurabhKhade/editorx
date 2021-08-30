import {useConfig} from '../hooks';
import {useRef} from 'react';

export default function Input({label,labelFor}) {
  const [config,setConfig] = useConfig();
  const ref = useRef(null);
  
  let value = config[labelFor];
  
  function change(e) {
    setConfig({[labelFor]:Number(e.target.value)});
  }
  
  function click() {
    ref.current.focus();
  }

  return (
    <div className="settings-label">
      <p onClick={click}>
        {label}
      </p>
      <p className="hasInput">
        <input 
          type="number" 
          value={value}
          onChange={change}
          ref={ref}/>
      </p>
    </div>
  );
}