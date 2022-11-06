import React from "react";
import CenterMenu from "./CenterMenu";

function Header() {
  const buttonStyle =
    " border-[2px] text-[1rem] rounded-[10px] border-[#584153] px-[25px] py-[7px] mr-[2rem] mb-[1rem] ";
  return (
    <div
      className="header bg-[#AF8BAF] 
  flex items-center 
  justify-between px-[5rem]
  pt-[2.2rem]
  rounded-b-[5rem]
  "
    >
      {/* Logo */}
      <img
        className={"mb-[1.5rem] ml-[1.5rem]"}
        src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/100/null/external-music-player-electronics-xnimrodx-lineal-color-xnimrodx.png"
        alt=""
      />{" "}
      {/* Side Menu */}
      <CenterMenu />
      {/* Buttons */}
      <div className="buttons flex">
        <button className={`mr-[35px] hover:bg-[#ECC5FB] ` + buttonStyle}>
          Giriş Yap
        </button>
        <button className={` bg-[#ECC5FB] ` + buttonStyle}>Kayıt Ol</button>
      </div>
    </div>
  );
}

export default Header;
