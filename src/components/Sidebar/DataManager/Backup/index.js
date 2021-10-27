import "./backup.css";

export default function Backup({ open, setOpen }) {
  const style = {
    display: open ? "flex" : "none",
  };

  return (
    <div style={style} className="backup flex-column whitebg">
      <div className="button" onClick={backupConfig}>
        <p>Backup Config</p>
      </div>
      <div className="button" onClick={backupFiles}>
        <p>Backup Files</p>
      </div>
      <div className="button danger" onClick={() => setOpen(false)}>
        <p>Back</p>
      </div>
    </div>
  );
}

function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function backupConfig() {
  let config = localStorage.getItem("editorConfig");
  if (config === undefined || config === null) {
    config = "{}";
  }
  download("config.json", config);
}

function backupFiles() {
  let files = localStorage.getItem("userFiles");
  if (files === undefined || files === null) {
    files = "{}";
  }
  download("userFiles.json", files);
}