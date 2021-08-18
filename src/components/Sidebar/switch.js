import {useConfig} from '../hooks';

export default function Switch({label,labelFor}) {
  const [config,setConfig] = useConfig();
  
  let enabled = config[labelFor];
  
  const style = {
    opacity: enabled?'1':'0'
  };
  
  function click() {
    setConfig({[labelFor]:!enabled});
  }
  
  return (
    <div onClick={click}>
      <p>{label}</p>
      <div className="switch">
        <div style={style}>
        </div>
      </div>
    </div>
  )
}