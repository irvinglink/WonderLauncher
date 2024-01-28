import React, { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import main_button from "../../assets/sounds/main_button.mp3";
import menu_selection from "../../assets/sounds/menu_selection.mp3";
import "../../utils/utils.css";

export default function LoginContainer() {
  const inputStyles =
    "bg-transparent border-b border-white text-white py-1 focus:outline-none";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Validate if username and password are not empty
  const validateInputs = () => {
    if (!username || !password) {
      console.log("Please enter both username and password");
      return false;
    }
    return true;
  };

  const onHoverButton = () => {
    new Audio(menu_selection).play();
  };

  // Invoke the login command with username and password
  const handleLogin = () => {
    new Audio(main_button).play();

    if (!validateInputs()) {
      return;
    }

    invoke("login", { credentials: { username, password } }).catch((error) => {
      console.error(error);
    });

    invoke("create_main_window");
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="backdrop-blur-sm rounded-xl w-[350px] h-96 absolute z-10 p-4 flex flex-col border border-white">
        <h1 className="text-white font-bold text-xl text-center m-4">
          Wonder Launcher
        </h1>
        <div className="flex justify-center items-center">
          <img
            src="../../../public\diamond.svg"
            className="fill-white w-12 h-12"
          />
        </div>
        <input
          type="text"
          placeholder="Username"
          className={inputStyles + " mb-3 mt-3"}
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
            onMouseOver={onHoverButton}
          >
            Forgot password?
          </a>
        </div>

        <button
          className="bg-transparent border border-white text-white font-bold px-4 py-2 rounded hover:bg-white hover:text-black transition duration-300"
          onClick={handleLogin}
          onMouseOver={onHoverButton}
        >
          Login
        </button>

        <div className="flex-grow flex items-center justify-center">
          <a
            className="text-white font-normal text-center hover:font-semibold transition duration-300 glow-on-hover"
            href="https://localhost/signup"
            onMouseOver={onHoverButton}
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
