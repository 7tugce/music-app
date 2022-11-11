import React from "react";
import DownloadAds from "./DownloadAds";
function Hero() {
 
  return (
    <div
      className="wrapper  text-[2rem]  flex items-center justify-between px-[5rem] rounded-[5rem] w-[100%]
    h-[35rem] relative m-[20px]"
    >
      {/* left side */}
      <div
        className="headings flex flex-col w-[800px] justify-center h-[100%]
      text-[3rem]  mt-[50px] m-[20px] rounded-[1rem]"
      >
        <span className="m-[20px] items-center">
          <b>En kaliteli müziği</b>
        </span>{" "}
        <span className="ml-[20px] items-center " >deneyimle</span>
        <span className=" text-[20px] text-[#404258] m-[20px] ">
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
        <span className="text-[13px] m-[20px]">
            IOS ve Android cihazlarınız için şimdi indirin
          </span>
          <DownloadAds />
        </div>
      </div>
      {/* right side */}
      <div className="image ">
        <img
          className=" mb-[3rem]  h-[500px] w-[300px] mr-[8rem] rotate-[-17deg] mt-[70px] "
          src="https://res.cloudinary.com/dirtkkfqn/image/upload/v1667849592/fgh_wp0pxn.jpg"
          alt="music"
        />
      </div>
    </div>
  );
}

export default Hero;
