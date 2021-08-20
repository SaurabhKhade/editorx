import './sidebar.css';
import './settings.css';
import Tab from './tab';
import Switch from './switch';
import Input from './input';
import HandleFiles from './handleFiles';
import {useConfig} from '../hooks';
import {useState} from 'react';

export default function Sidebar({open}) {
  const [config,setConfig] = useConfig();
  const [childs,setChilds] = useState(0);
  
  const style = {
    display: open?'block':'none'
  };
  
  function renderThemes(item) {
    function click() {
      setConfig({theme: item});
    }
    return <MakeItem item={item} key={item} click={click} match={config.theme}/>
  }
  
  function renderBinding(item) {
    function click() {
      setConfig({keyboardHandler: item});
    }
    return <MakeItem item={item} key={item} click={click} match={config.keyboardHandler} />
  }
  
  function renderFonts(item) {
    function click() {
      setConfig({
        style: {
          fontFamily: item
        }
      });
    }
    return <MakeItem item={item} key={item} click={click} match={config.style.fontFamily} />
  }
  
  return (
    <div className="sidebar" style={style}>
      <Tab caption="Files" childs={childs}>
        <HandleFiles setChilds={setChilds}/>
      </Tab>
      <Tab caption="Settings" childs={8}>
        <Input 
          label="Font Size" 
          labelFor="fontSize" />
        <Input 
          label="Tab Size" 
          labelFor="tabSize" />
        <Switch 
          label="Basic Autocompletion" 
          labelFor="enableBasicAutocompletion" />
        <Switch 
          label="Live Autocompletion" 
          labelFor="enableLiveAutocompletion" />
        <Switch 
          label="Code Snippets" 
          labelFor="enableSnippets" />
        <Switch 
          label="Highlight Active Line" 
          labelFor="highlightActiveLine" />
        <Switch 
          label="Show Line Numbers" 
          labelFor="showGutter" />
        <Switch 
          label="Wrap Lines" 
          labelFor="wrapEnabled" />
      </Tab>
      <Tab caption="Themes" childs={AllThemes.length}>
        {AllThemes.map(renderThemes)}
      </Tab>
      <Tab caption="Key Bindings" childs={keyBindings.length}>
        {keyBindings.map(renderBinding)}
      </Tab>
      <Tab caption="Font Family" childs={fontfamilies.length}>
        {fontfamilies.map(renderFonts)}
      </Tab>
    </div>
  )
}

function MakeItem({item,click,match}) {
  
  let name = match===item?'selected':'';
  
  function After() {
    if (match===item) {
      return <span>&#9745;</span>; 
    }
    return "";
  }
  
  return (
    <p onClick={click}
      className={name}>
      {item}&nbsp;&nbsp;<After/>
    </p>
  )
}

const AllThemes = ["ambiance", "chaos", "chrome", "clouds", "clouds_midnight", "cobalt", "crimson_editor", "dawn", "dracula", "dreamweaver", "eclipse", "github", "gob", "gruvbox", "idle_fingers", "iplastic", "katzenmilch", "kr_theme", "kuroir", "merbivore", "merbivore_soft", "mono_industrial", "monokai", "nord_dark", "pastel_on_dark", "solarized_dark", "solarized_light", "sqlserver", "terminal", "textmate", "tomorrow", "tomorrow_night", "tomorrow_night_blue", "tomorrow_night_bright", "tomorrow_night_eighties", "twilight", "vibrant_ink", "xcode"]

const keyBindings = [
  'emacs',
  "sublime",
  "vim",
  "vscode"
]

const fontfamilies = [
  "Apercu Mono",
  "Consolas",
  "Courier Prime Code",
  "Dank Mono",
  "Droid Sans",
  "Fira Code",
  "Hack",
  "Monoid",
  "Monolisa",
  "Noto Mono",
  "Open Sans",
  "Press Start 2p",
  "Roboto",
  "Source Code Pro",
  "Sudo",
  "Ubuntu Mono"
]