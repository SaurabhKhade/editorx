import "./dataManager.css";
import Backup from "./Backup";
import Restore from "./Restore";
import { useState } from "react";

export default function DataManager({ visible,setVisible }) {
  const [backupOpen, setBackupOpen] = useState(false);
  const [restoreOpen, setRestoreOpen] = useState(false);

  const style = {
    display: visible ? "flex" : "none",
  };

  function whichTab() {
    if (backupOpen) {
      return <Backup open={backupOpen} setOpen={setBackupOpen} />;
    } else if (restoreOpen) {
      return <Restore open={restoreOpen} setOpen={setRestoreOpen} />;
    }else {
      return (
        <>
          <div className="button" onClick={() => setBackupOpen(true)}>
            <p>Backup</p>
          </div>
          <div className="button" onClick={() => setRestoreOpen(true)}>
            <p>Restore</p>
          </div>
          <div className="button danger" onClick={() => setVisible(false)}>
            <p>Exit</p>
          </div>
        </>
      );
    }
  }

  return (
    <div className="DataManager flex-column" style={style}>
      {whichTab()}
    </div>
  );
}
