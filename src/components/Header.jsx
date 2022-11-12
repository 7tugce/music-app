import React from "react";
import CenterMenu from "./CenterMenu";

function Header() {
  const buttonStyle =
    "  text-[1rem] relative rounded-[10px] border-[1px] px-[25px] py-[7px] mr-[2rem] mb-[1rem] ";
  return (
    <div
      className="header bg-gradient-to-bl from-[white] to-[#AF8BAF] 
  flex items-center 
  
  justify-between px-[5rem]
  pt-[2rem]
  rounded-b-[5rem]
  text-[1.3rem]
  "
    >
      {/* Logo */}
      <img
        className={"mb-[1rem] ml-[1.5rem]"}
        src="https://img.icons8.com/ios-filled/50/null/listening-to-music-on-headphones.png"
        alt=""
      />{" "}
      {/* Side Menu */}
      <CenterMenu />
      {/* Buttons */}

      
      <div className="buttons flex">
        <button
        
          className={`mr-[35px] hover:bg-[#ECC5FB] ` + buttonStyle}
        >
          Giriş Yap 
        </button>
        <button 
        className={` bg-[#ECC5FB] ` + buttonStyle}>
          Kayıt Ol
        </button>
      </div>
    </div>
  );
}

export default Header;
