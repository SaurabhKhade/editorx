import {useConfig} from '../hooks';

export default function Switch({label,labelFor,optional}) {
  const [config,setConfig] = useConfig();
  
  let enabled = config[labelFor];
  
  if (optional) {
    enabled = config.setOptions[labelFor];
  }
  
  const style = {
    opacity: enabled?'1':'0'
  };
  
  function optionalClick() {
    let setOptions = config.setOptions;
    if (setOptions === undefined) {
      setOptions = {};
    }
    setOptions[labelFor] = !enabled;
    setConfig(setOptions);
  }
  
  function click() {
    if (optional) 
      return optionalClick();
    setConfig({[labelFor]:!enabled});
  }
  
  return (
    <div onClick={click} className="settings-label">
      <p>{label}</p>
      <div className="switch">
        <div style={style}>
        </div>
      </div>
    </div>
  )
}