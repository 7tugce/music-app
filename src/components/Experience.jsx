import React from "react";
import Feature from "./Feature";
function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem]  h-[60rem] pt-[18rem] mt-[-10rem] relative z-[1] ">
      {/* icon */}
      <img src="" alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2.5rem] mb-[1rem]">
        <span>Hayatınızı değiştirecek müthiş bir uygulama</span>
        <span>
          <b>Müzik deneyimi</b>
        </span>
      </div>
      {/* features  */}
      <div className="feature flex items-stretch justify-around mt-[6rem] w-[100%] z-[2] ">
        <Feature
          icon={
            <img src="https://img.icons8.com/nolan/96/microphone.png" alt="" />
          }
          title="Canlı müzik"
        />
        <Feature
          icon={
            <img src="https://img.icons8.com/nolan/96/headphones.png" alt="" />
          }
          title="Günlük müzik ihtiyacınız"
        />
        <Feature
          icon={
            <img src="https://img.icons8.com/nolan/96/james-brown.png" alt="" />
          }
          title="Sanatçılar için"
        />
      </div>
    </div>
  );
}

export default Experience;
