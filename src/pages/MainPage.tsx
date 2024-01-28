import { useState } from "react";
import background from "./../assets/img/backgrounds/bg_1.jpg";
import "../utils/utils.css";
import "./MainPage.css";

export default function MainPage() {
  const [isHoverMojangStatus, setHoverMojangStatus] = useState(false);

  const onMojangMouseOver = () => {
    setHoverMojangStatus(true);
  };

  const onMojangMouseOut = () => {
    setHoverMojangStatus(false);
  };

  return (
    <div>
      <img
        src={background}
        className="w-full h-full absolute object-cover -z-10"
        alt="Login Background"
      />

      <div className="w-screen h-screen flex flex-col">
        {/* Content */}
        <div className="flex-grow">

        </div>

        {/* Footer */}
        <div
          id="footer"
          className="w-screen h-[10%] bg-black bg-opacity-40 flex flex-row justify-around items-center text-white relative"
        >
          <div id="left">
            <div
              id="mojangStatus"
              className="relative flex flex-row items-center cursor-pointer"
            >
              <div
                className="button-glow-effect"
                onMouseOver={onMojangMouseOver}
                onMouseOut={onMojangMouseOut}
              >
                Mojang
              </div>
              <span className="mojang-dot m-2 text-mossGreen text-xl">•</span>

            </div>
            {/* Mojang Status */}
            {isHoverMojangStatus && (
                <div className="mojang-status-panel">
                  {/* Content to show when Mojang status is hovered */}
                  Status: Online
                </div>
              )}
          </div>
          <div id="middle" className="relative mr-4 ml-4">
            <button className="play-button">Start Game</button>
          </div>
          <div id="right" className="relative">
            <span className="button-glow-effect cursor-pointer">Version</span>
          </div>
        </div>
      </div>
    </div>
  );
}
