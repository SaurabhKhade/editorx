import './sidebar.css';
import Tab from './tab';
import Switch from './switch';
import Input from './input';
import HandleFiles from './handleFiles';
import {useConfig} from '../hooks';

export default function Sidebar({open}) {
  const [,setConfig] = useConfig();
  const style = {
    display: open?'block':'none'
  };
  
  function renderThemes(item) {
    function click() {
      setConfig({theme: item});
    }
    return <MakeItem item={item} key={item} click={click} />
  }
  
  function renderBinding(item) {
    function click() {
      setConfig({keyboardHandler: item});
    }
    return <MakeItem item={item} key={item} click={click} />
  }
  
  return (
    <div className="sidebar" style={style}>
      <Tab caption="Files" childs={4}>
        <HandleFiles />
      </Tab>
      <Tab caption="Settings" childs={7}>
        <Input label="Font Size" value={14} />
        <Input label="Tab Size" value={4} />
        <Switch label="Code Autocompletion" enabled />
        <Switch label="Code Snippets" enabled />
        <Switch label="Highlight Active Line" enabled />
        <Switch label="Line Numbers" enabled />
        <Switch label="Wrap Lines" />
      </Tab>
      <Tab caption="Themes" childs={AllThemes.length}>
        {AllThemes.map(renderThemes)}
      </Tab>
      <Tab caption="Key Bindings" childs={keyBindings.length}>
        {keyBindings.map(renderBinding)}
      </Tab>
      <Tab caption="Font Family" childs={fontfamilies.length}>
        {fontfamilies.map(item=>{
          return <MakeItem item={item} key={item} click={()=>{}} />
        })}
      </Tab>
    </div>
  )
}

function MakeItem({item,click}) {
  return (
    <p onClick={click}>{item}</p>
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
  "Dank Mono",
  "Droid Sans",
  "Fira Code",
  "Gintronic",
  "Hack",
  "Input Mono",
  "Monoid",
  "MonoLisa",
  "Press Start 2P",
  "Roboto",
  "Source Code",
  "Sudo",
  "Ubuntu Mono"
]