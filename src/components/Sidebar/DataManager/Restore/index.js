import "./restore.css";
import { useConfig, useFileSystem } from "../../../hooks";

export default function Backup({ open, setOpen }) {
  const style = {
    display: open ? "flex" : "none",
  };
  let [config, , fullConfigUpdate] = useConfig();
  let { files, setAllFiles } = useFileSystem();

  return (
    <div style={style} className="backup flex-column whitebg">
      <p className="warning">
        *Please Make sure that you have not altered any content of backup file
        or it may cause inconsistency in Editor!*
      </p>
      <div
        className="button"
        onClick={() => restoreConfig(config, fullConfigUpdate)}
      >
        <p>Restore Config</p>
      </div>
      <div className="button" onClick={() => restoreFiles(files, setAllFiles)}>
        <p>Restore Files</p>
      </div>
      <div className="button danger" onClick={() => setOpen(false)}>
        <p>Back</p>
      </div>
    </div>
  );
}

async function restoreConfig(config, fullConfigUpdate) {
  let oldConf = JSON.stringify(config);
  try {
    let content = await readBackup();
    let ch = window.confirm(
      "Do you really want to Restore Configurations from selected file?"
    );
    if (ch) {
      fullConfigUpdate(content);
    }
  } catch (e) {
    fullConfigUpdate(oldConf);
    alert(
      "Failed to Restore your file! File may be corrupted or altered. Fallling back to existing configurations."
    );
  }
}

async function restoreFiles(files, setAllFiles) {
  try {
    let content = await readBackup();
    content = JSON.parse(content);
    let ch = "";
    let required = ["M", "m", "C", "c", "O", "o"];

    while (!required.includes(ch)) {
      ch = await getChoice();
    }
    if (ch === "M" || ch === "m") {
      let newContent = {...files,...content}
      setAllFiles(newContent);
    } else if (ch === "O" || ch === "o") {
      setAllFiles(content);
    }
  } catch (err) {}
}

function getChoice() {
  return new Promise((res, rej) => {
    let ch = window.prompt(
      "Enter 'M' to merge existing and restored files\nEnter 'O' to override existing files with restored files.\nEnter 'C' to cancel operation."
    );
    if (ch === null) ch = "C";
    res(ch);
  });
}

function readBackup() {
  return new Promise((resolve, reject) => {
    try {
      let picker = document.createElement("input");
      picker.type = "file";
      picker.accept = ".json";
      picker.click();
      picker.onchange = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = (readerEvent) => {
          var content = readerEvent.target.result;
          resolve(content);
        };
      };
    } catch (err) {
      reject(err);
    }
  });
}
