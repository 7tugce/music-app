import React from "react";

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer mb-[1.5rem]"
  return (
    <div className="menu ">
      <ul className="flex w-[100%] justify-between">
        <li className={liStyle}>Anasayfa</li>
        <li className={liStyle}>Hakkımızda</li>
        <li className={liStyle}>Etkinlikler</li>
        <li className={liStyle}>İletişim</li>
      </ul>
    </div>
  );
}

export default CenterMenu;
