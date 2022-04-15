// non components
import "./sidebar.css";
import "./settings.css";
import { useConfig, useTheme } from "../hooks";
import { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { useSwipeable } from "react-swipeable";
import loadable from "@loadable/component";
import axios from "axios";

// components
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";
const Tab = loadable(() => import("./Tab"));
const Switch = loadable(() => import("./Switch"));
const Input = loadable(() => import("./Input"));
const HandleFiles = loadable(() => import("./Files"));
const Popup = loadable(() => import("./Popup"));
const DataManager = loadable(() => import("./DataManager"));
const LogIn = loadable(() => import("./Login"));

export default function Sidebar() {
  const [config, setConfig] = useConfig();
  const [childs, setChilds] = useState(0);
  const [open, setOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();
  const [visible, setVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSyncDisabled, setIsSyncDisabled] = useState(false);
  const [syncLabel, setSyncLabel] = useState("Sync");

  const style = {
    right: open ? "0" : "-301px",
  };

  const iconOpenStyle = {
    opacity: open ? "0" : "1",
    right: open ? "299px" : "0px",
    pointerEvents: open ? "none" : "all",
  };
  const iconCloseStyle = {
    opacity: open ? "1" : "0",
    right: open ? "299px" : "0px",
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
    display: open ? "block" : "none",
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id && id !== "") {
      setIsLoggedIn(true);
    }
  }, []);

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

  function renderSyncs(item) {
    async function click() {
      setSyncLabel("Syncing...");
      setIsSyncDisabled(true);
      let id = localStorage.getItem("id");

      if (!id || id === "") {
        alert("ID not found! Please relogin to continue.");
      }
      if (item === "Upload Settings") {
        await uploadSettings(id);
      } else if (item === "Download Settings") {
        await downloadSettings(id);
      } else if (item === "Upload Files") {
        let ch = window.confirm("Files with same names will be overwritten...");
        if (ch) await uploadFiles(id);
      } else {
        let ch = window.confirm("Files with same names will be overwritten...");
        if (ch) await downloadFiles(id);
      }
      setSyncLabel("Sync");
      setIsSyncDisabled(false);
    }
    return <MakeItem item={item} key={item} click={click} />;
  }

  return (
    <>
      <div
        className="backdrop"
        style={backdropStyle}
        onClick={() => setOpen(false)}
      ></div>
      <div className="sidebar-toggle-handler" {...swipeOpenHandlers}></div>
      <Popup />
      <DataManager visible={visible} setVisible={setVisible} />
      <LogIn visible={loginVisible} setVisible={setLoginVisible} />
      <div className="sidebar" style={style} {...swipeCloseHandlers}>
        <RiMenuUnfoldLine
          className="sidebar-toggle-icon"
          style={iconCloseStyle}
          onClick={() => setOpen(false)}
        />
        <RiMenuFoldLine
          className="sidebar-toggle-icon"
          style={iconOpenStyle}
          onClick={() => setOpen(true)}
        />

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
        {isLoggedIn ? (
          <Tab
            caption={syncLabel}
            childs={syncs.length}
            disabled={isSyncDisabled}
          >
            {syncs.map(renderSyncs)}
          </Tab>
        ) : (
          <Tab
            caption="LogIn/SignUp"
            DataManager={!!LogIn}
            setVisible={setLoginVisible}
          ></Tab>
        )}
        <Tab
          caption="Backup or Restore"
          DataManager
          setVisible={setVisible}
        ></Tab>
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

const url = `https://editorx-api.vercel.app/api/sync`;

async function uploadSettings(id) {
  let config = localStorage.getItem("editorConfig");

  if (!config || config === "") {
    config = "{}";
  }

  try {
    await axios.post(`${url}/settings`, {
      id,
      config,
    });
  } catch (err) {
    alert(err.response.data.message);
  }
}

async function downloadSettings(id) {
  let config = localStorage.getItem("editorConfig");

  if (!config || config === "") {
    config = "{}";
  }
  config = JSON.parse(config);

  try {
    let response = await axios.get(`${url}/settings?id=${id}`);
    let server_config = response.data.config;
    let merged_config = { ...config, ...server_config };
    localStorage.setItem("editorConfig", JSON.stringify(merged_config));
  } catch (err) {
    alert(err.response.data.message);
  }
}

async function uploadFiles(id) {
  let files = localStorage.getItem("userFiles");

  if (!files || files === "") {
    files = "{}";
  }

  try {
    await axios.post(`${url}/files`, {
      id,
      files,
    });
  } catch (err) {
    alert(err.response.data.message);
  }
}

async function downloadFiles(id) {
  let files = localStorage.getItem("userFiles");

  if (!files || files === "") {
    files = "{}";
  }
  files = JSON.parse(files);

  try {
    let response = await axios.get(`${url}/files?id=${id}`);
    let server_files = response.data.files;
    console.log(server_files);
    let merged_files = { ...files, ...server_files };
    console.log(merged_files);
    localStorage.setItem("userFiles", JSON.stringify(merged_files));
  } catch (err) {
    alert(err.response.data.message);
  }
}

const syncs = [
  "Upload Settings",
  "Download Settings",
  "Upload Files",
  "Download Files",
];

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
