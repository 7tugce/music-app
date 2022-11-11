import React from "react";
import { Facebook, Twitter, YouTube, LinkedIn } from "@mui/icons-material";

function Footer() {

const SocialIconStyle ="rounded-full border-none p-2 mr-[3rem]"

  return (
    <div className="footer flex flex-col  flex items-center
    
    text-[1.3rem] items-center justify-start px-[5rem]  pb-[3rem] mt-[-10rem] relative z-[-2] bg-gradient-to-bl from-[white] to-[#AF8BAF] rounded-t-[5rem]">
      {/*social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialIconStyle}>
          <Facebook />
        </div>
        <div className={SocialIconStyle}>
          <Twitter />
        </div>
        <div className={SocialIconStyle}>
          <YouTube />
        </div>
        <div className={SocialIconStyle}>
          <LinkedIn />
        </div>
      </div>
      {/*detail */}

      <span className="text-[1rem] text-gray-400 px-[15rem]  text-center mt-[4rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         </span>
    </div>
  );
}

export default Footer;
