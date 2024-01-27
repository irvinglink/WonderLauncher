import React from "react";
import TitleBar from "../components/global/TitleBar";
import background from "./../assets/img/backgrounds/bg_1.jpg";

export default function MainPage() {
  return (
    <div>
      <img
        src={background}
        className="w-full h-full absolute object-cover -z-10"
        alt="Login Background "
      ></img>
      <TitleBar/>
      
    </div>
  );
}
