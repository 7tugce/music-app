import React from "react";
import MusicPlayer from "./MusicPlayer";
import SwipeableTextMobileStepper from "./SwipeableTextMobileStepper";

function Search() {
  return (
    <div className="right flex items-start flex-col justify-start flex-1 h-[100%] pt-[9rem] ml-[100px]">

     <div>
     <SwipeableTextMobileStepper />
     </div>

      <div className="searchbar mr-0 justify-start w-[50%]">

      

        <input
          type="text"
          placeholder="Nasıl yardımcı olabiliriz? "
          className="flex-[19] outline-none bg-gradient-to-bl from-[#EBC7E8] to-[#BFACE0] text-[black] rounded-xl p-3 h-[3rem] w-[100%]"
        ></input>
      </div>

      {/*paragraf */}

      <div className="detail flex flex-col mt-5 text-4xl">
        <span>
          <b>URL'i veya adıyla</b>
        </span>
        <span>istediğin müziği ara</span>

        <span className="text-sm mt-3 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
          Aliquam vitae ornare odio.<br></br>
          Donec ultricies erat vitae faucibus efficitur<br></br>
        </span>
        {/*music player*/}
        <MusicPlayer />
      </div>
    </div>
  );
}

export default Search;
