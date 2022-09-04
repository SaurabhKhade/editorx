import "../Login/login.css";
import { useState } from "react";
import axios from "axios";

export default function Signup({ open, setOpen }) {
  const style = {
    display: open ? "flex" : "none",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  // const url = "http://localhost:3001/signup";
  const url = "https://editorx-api.vercel.app/signup";

  function signup() {
    if (email === "") {
      alert("Please enter your email!");
    } else if (password !== confPassword) {
      alert("Passwords not match!");
    } else {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        url,
        data: {
          email,
          password,
        },
      };
      axios(config)
        .then(() => {
          localStorage.setItem("id", email);
          alert("Account Created Successfully.");
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
          alert(
            "This email is already registered, Please try to login instead."
          );
        });
    }
  }

  return (
    <div style={style} className="login flex-column whitebg">
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Confirm Password"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
        />
        <button className="input" onClick={signup}>
          Signup
        </button>
      </div>
      <div className="button danger" onClick={() => setOpen(false)}>
        <p>Back</p>
      </div>
    </div>
  );
}
