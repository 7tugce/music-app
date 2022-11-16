import React from "react";
import MusicPlayer from "./MusicPlayer";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";

function Search() {
  return (
    <div
      className=" text-[2rem]  flex items-center px-[5rem] rounded-[5rem] w-[100%]
    h-[35rem] relative mt-[130px]"
    >
      <div className="list w-[100%]">
        <SwipeableTextMobileStepper />
      </div>
      <div className="right h-[500px]">
        <div className="searchbar  w-[100%]">
          <input
            type="text"
            placeholder="Nasıl yardımcı olabiliriz? "
            className="flex-[19] outline-none bg-gradient-to-bl from-[#EBC7E8] to-[#BFACE0] text-[1rem] rounded-xl p-3 h-[3rem] w-[700px]"
          ></input>
          
        </div>

        <div className="detail items-center flex flex-col mt-[50px] mb-[50px] text-[2.7rem]">
          <span>
            <b>URL'i veya adıyla</b>
          </span>
          <span>istediğin müziği ara</span>

          <span className="text-[1.2rem] mt-3 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
            Aliquam vitae ornare odio.
            Donec ultricies erat vitae <br></br>faucibus efficitur.<br></br>
          </span>

          <MusicPlayer />
        </div>
      </div>
    </div>
  );
}

export default Search;
