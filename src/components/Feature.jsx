import React from "react";

function Feature({ icon, title }) {
  return (
    <div className="feature text-[1rem] flex items-center justify-center flex-col relative text-center mx-12 ">
      {/* icon */}

      <div className="icon">
        <span className="mt-[5]">{icon}</span>
      </div>
      <div className="title">

      <span className="mt[5]">{title}</span>
      </div>

<span className="text[#404258] mt-[4rem]">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
 Suspendisse fringilla feugiat rhoncus.<br></br>
 Curabitur ac neque eu lacus consectetur iaculis.
</span>

<span className="text[#FF8FB1] underline mt-[3rem] hover:cursor-pointer"> <b>Daha fazla bilgi</b></span>

    </div>
  );
}

export default Feature;
