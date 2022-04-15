import "./login.css";
import { useState } from "react";
import axios from "axios";

export default function Login({ open, setOpen }) {
  const style = {
    display: open ? "flex" : "none",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const url = "http://localhost:4000/api/login";
  const url = "https://editorx-api.vercel.app/api/login";

  function login() {
    if (email === "") {
      alert("Please enter your email!");
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
          alert("Logged In Successfully.");
          window.location.reload();
        })
        .catch((err) => {
          alert(err.response.data.message);
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
        <button className="input" onClick={login}>
          Login
        </button>
      </div>
      <div className="button danger" onClick={() => setOpen(false)}>
        <p>Back</p>
      </div>
    </div>
  );
}
