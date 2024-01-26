import React, { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

function LoginContainer() {
  const inputStyles =
    "bg-transparent border-b border-white text-white py-1 focus:outline-none";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
    // Invoke the login command with username and password
  const handleLogin = () => {
    invoke("login", {credentials: { username, password } })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="backdrop-blur-sm rounded-xl w-[350px] h-96 absolute z-10 p-4 flex flex-col border border-white">
        <h1 className="text-white font-bold text-xl text-center m-4 mb-12">
          Wonder Launcher
        </h1>
        <input
          type="text"
          placeholder="Username"
          className={inputStyles + " mb-3"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={inputStyles}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <label className="text-white inline-block m-4 ml-0">
            <input
              className="align-middle inline-block w-4 h-4 accent-blue-500 mr-2"
              type="checkbox"
            />
            Keep Login
          </label>
          <a
            className="text-white inline-block m-4 mr-0 border-b border-transparent hover:border-white transition duration-300"
            href="https://localhost/forgot"
          >
            Forgot password?
          </a>
        </div>

        <button
          className="bg-transparent border border-white text-white font-bold px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300"
          onClick={handleLogin}
        >
          Login
        </button>

        <a
          className="flex-grow flex items-center justify-center text-white font-normal text-center hover:font-semibold transition duration-300"
          href="https://localhost/signup"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default LoginContainer;
