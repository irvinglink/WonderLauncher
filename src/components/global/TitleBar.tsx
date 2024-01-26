import React, { useEffect, useState } from "react";
import { appWindow } from "@tauri-apps/api/window";

function TitleBar() {

  const [isFullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    appWindow.setFullscreen(isFullscreen);
  }, [isFullscreen]);

  const handleMinimize = () => appWindow.minimize();
  const handleToggleMaximize = () => setFullscreen(!isFullscreen);
  const handleClose = () => appWindow.close();

  return (
    <div data-tauri-drag-region className="h-[30px] select-none flex justify-end fixed top-0 left-0 right-0 z-50">
      {[
        { id: "titlebar-minimize", icon: "window-minimize", onClick: handleMinimize },
        { id: "titlebar-maximize", icon: "window-maximize", onClick: handleToggleMaximize },
        { id: "titlebar-close", icon: "close", onClick: handleClose },
      ].map(({ id, icon, onClick }) => (
        <div key={id} className="inline-flex justify-center items-center w-[30px] h-[30px] cursor-pointer" id={id} onClick={onClick}>
          <img src={`https://api.iconify.design/mdi:${icon}.svg`} alt={id} className="invert-[100]" />
        </div>
      ))}
    </div>
  )
}

export default TitleBar;
