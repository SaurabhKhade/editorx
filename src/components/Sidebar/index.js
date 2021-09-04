// non components
import "./sidebar.css";
import "./settings.css";
import { useConfig, useTheme } from "../hooks";
import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import {useSwipeable} from 'react-swipeable';
import loadable from '@loadable/component';

// components
import {RiMenuFoldLine,RiMenuUnfoldLine} from 'react-icons/ri';
const Tab = loadable(() => import('./Tab'));
const Switch = loadable(() => import('./Switch'));
const Input = loadable(() => import('./Input'));
const HandleFiles = loadable(() => import('./Files'));
const Popup = loadable(() => import('./Popup'));


export default function Sidebar() {
  const [config, setConfig] = useConfig();
  const [childs, setChilds] = useState(0);
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();

  const style = {
    right: open ? "0" : "-301px",
  };

  const iconOpenStyle = {
    opacity: open ? "0" : "1",
    right: open ? "299px" : "0px",
    pointerEvents: open ? "none" : "all"
  };
  const iconCloseStyle = {
    opacity: open ? "1" : "0",
    right: open ? "299px" : "0px"
  };

  const btnStyle = {
    left: theme === "light" ? ".1rem" : "calc(100% - 1.4rem)",
  };
  
  const swipeOpenHandlers = useSwipeable({
    onSwipedLeft: () => setOpen(true),
    ...config,
  });
  
  const swipeCloseHandlers = useSwipeable({
    onSwipedRight: () => setOpen(false),
    ...config,
  });
  
  const backdropStyle = {
    display: open?'block':'none'
  };

  function renderThemes(item) {
    function click() {
      setConfig({ theme: item });
    }
    return (
      <MakeItem item={item} key={item} click={click} match={config.theme} />
    );
  }

  function renderBinding(item) {
    function click() {
      setConfig({ keyboardHandler: item });
    }
    return (
      <MakeItem
        item={item}
        key={item}
        click={click}
        match={config.keyboardHandler}
      />
    );
  }

  function renderFonts(item) {
    function click() {
      setConfig({
        style: {
          fontFamily: item,
        },
      });
    }
    return (
      <MakeItem
        item={item}
        key={item}
        click={click}
        match={config.style.fontFamily}
      />
    );
  }

  return (
    <>
      <div className="backdrop" style={backdropStyle} onClick={()=>setOpen(false)}></div>
      <div className="sidebar-toggle-handler" {...swipeOpenHandlers}>
      </div>
      <Popup />
      <div className="sidebar" style={style} {...swipeCloseHandlers}>
        
        <RiMenuUnfoldLine className="sidebar-toggle-icon" style={iconCloseStyle} onClick={()=>setOpen(false)}/>
        <RiMenuFoldLine className="sidebar-toggle-icon" style={iconOpenStyle} onClick={()=>setOpen(true)}/>
        
        <div className="theme-toggle">
          <p>
            <HiSun />
          </p>
          <div className="wrapper" onClick={toggleTheme}>
            <div className="button" style={btnStyle}></div>
          </div>
          <p>
            <HiMoon />
          </p>
        </div>
        <Tab caption="Files" childs={childs}>
          <HandleFiles setChilds={setChilds} sidebarOpen={setOpen} />
        </Tab>
        <Tab caption="Editor Settings" childs={12}>
          <Input label="Font Size" labelFor="fontSize" />
          <Input label="Tab Size" labelFor="tabSize" />
          <Switch
            label="Basic Autocompletion"
            labelFor="enableBasicAutocompletion"
          />
          <Switch
            label="Live Autocompletion"
            labelFor="enableLiveAutocompletion"
          />
          <Switch label="Code Snippets" labelFor="enableSnippets" />
          <Switch
            label="Highlight Active Line"
            labelFor="highlightActiveLine"
          />
          <Switch label="Show Line Numbers" labelFor="showGutter" />
          <Switch label="Wrap Lines" labelFor="wrapEnabled" />
          <Switch label="Read Only" labelFor="readOnly" optional />
          <Switch
            label="Highlight Selected Word"
            labelFor="highlightSelectedWord"
            optional
          />
          <Switch
            label="Enable Multiselect"
            labelFor="enableMultiselect"
            optional
          />
          <Switch label="Basic Syntax Check" labelFor="useWorker" optional />
        </Tab>
        <Tab caption="Editor Themes" childs={AllThemes.length}>
          {AllThemes.map(renderThemes)}
        </Tab>
        <Tab caption="Keyboard Shortcuts" childs={keyBindings.length}>
          {keyBindings.map(renderBinding)}
        </Tab>
        <Tab caption="Font Style" childs={fontfamilies.length}>
          {fontfamilies.map(renderFonts)}
        </Tab>
        {Notification.permission !== "granted" ? (
          <Tab caption="Allow Notification" childs={0} notify>
          </Tab>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

function MakeItem({ item, click, match }) {
  let name = match === item ? "selected" : "";

  function After() {
    if (match === item) {
      return <span>&#9745;</span>;
    }
    return "";
  }

  let label = item.split("_").join(" ");

  return (
    <p onClick={click} className={`tab-item ${name}`}>
      {label}&nbsp;&nbsp;
      <After />
    </p>
  );
}

const AllThemes = [
  "ambiance",
  "chaos",
  "chrome",
  "clouds",
  "clouds_midnight",
  "cobalt",
  "crimson_editor",
  "dawn",
  "dracula",
  "dreamweaver",
  "eclipse",
  "github",
  "gob",
  "gruvbox",
  "idle_fingers",
  "iplastic",
  "katzenmilch",
  "kr_theme",
  "kuroir",
  "merbivore",
  "merbivore_soft",
  "mono_industrial",
  "monokai",
  "nord_dark",
  "pastel_on_dark",
  "solarized_dark",
  "solarized_light",
  "sqlserver",
  "terminal",
  "textmate",
  "tomorrow",
  "tomorrow_night",
  "tomorrow_night_blue",
  "tomorrow_night_bright",
  "tomorrow_night_eighties",
  "twilight",
  "vibrant_ink",
  "xcode",
];

const keyBindings = ["emacs", "sublime", "vim", "vscode"];

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
  "Ubuntu Mono",
];