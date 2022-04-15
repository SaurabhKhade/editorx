import "./login.css";
import Login from "./Login";
import Signup from "./Signup";
import { useState } from "react";

export default function LoginManager({ visible, setVisible }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const style = {
    display: visible ? "flex" : "none",
  };

  function whichTab() {
    if (loginOpen) {
      return <Login open={loginOpen} setOpen={setLoginOpen} />;
    } else if (signupOpen) {
      return <Signup open={signupOpen} setOpen={setSignupOpen} />;
    } else {
      return (
        <>
          <div className="button" onClick={() => setLoginOpen(true)}>
            <p>Login</p>
          </div>
          <div className="button" onClick={() => setSignupOpen(true)}>
            <p>Signup</p>
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
