import React from "react";

function DownloadAds() {

  const downloadImgStyle = " mt-[0.5rem]"

  return (
    <div className="download">
      <div className="download_images flex">
        <img className={downloadImgStyle + " mr-[1.5rem] " } src="https://img.icons8.com/ios-glyphs/30/null/google-play.png" alt="Google Play Store" />{" "}
        <img className={downloadImgStyle} src="https://img.icons8.com/ios-glyphs/30/null/mac-os.png" alt="App Store" />
      </div>
    </div>
  );
}

export default DownloadAds;
