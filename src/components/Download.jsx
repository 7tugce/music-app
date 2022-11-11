import React from "react";
import DownloadAds from "./DownloadAds";

function Download(){
    return (
        <div className="flex flex-col items-center justify-start px-[5rem] mb-[100px] h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
          {/* tild icon or path icon */}
          <img  src="https://img.icons8.com/dotty/80/null/wavy-line.png"
            alt="" className="w-[5rem]" />
          {/* heading */}
          <div className="headline mt-7 flex flex-col items-center text-[2rem]">
          <span>
              <b>En iyi müzik uygulamasını</b>
            </span>
            <span>Şimdi indir</span>
           
            <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem]">
              Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
              Vestibulum ullamcorper volutpat varius.
            </span>
          </div>
          {/* dowload ads */}
          <div className="mt-14">
            <DownloadAds/>
          </div>
        </div>
      );
}
export default Download;