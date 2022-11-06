import React from "react";
import DownloadAds from "./DownloadAds";

function Hero() {
  return (
    <div
      className="wrapper text-[2rem]  flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%]
    h-[35rem] relative"
    >
      {/* left side */}
      <div
        className="headings flex flex-col items-start justify-center h-[100%]
      text-[3rem]"
      >
        <span>
          <b>En kaliteli müziği</b>
        </span>{" "}
        <span>deneyimle</span>
        <span className=" text-[15px] text-[#404258] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br></br> Aliquam malesuada nunc leo, id laoreet lectus pellentesque
          in.
          <br></br> Nullam id dictum ligula.
          <br></br> Vivamus efficitur vel nibh quis pellentesque.
          <br></br> Aenean eget turpis hendrerit, commodo mi interdum, malesuada
          erat.
        </span>
        {/* download ads */}
        <div>
          <span className="text-[13px]">
            IOS ve Android cihazlarınız için şimdi indirin
          </span>
          <DownloadAds />
        </div>
      </div>
      {/* right side */}
      <div className="images  ">
        <img
          className=" mb-[3rem] "
          src="https://img.icons8.com/ultraviolet/80/null/audio-wave--v1.png"
          alt="music"
        />
       
      </div>
    </div>
  );
}

export default Hero;
