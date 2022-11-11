import React from "react";
function MusicPlayer() {
  return (
    <div className="musicPlayer flex flex-col px-5  border-2 bg-gradient-to-bl from-[#C9BBCF] to-[#B7D3DF]  py-3 rounded-xl mt-5 ">
      {/*upper part */}
     
      <div className="upperPart flex items-center justify-between ">
        {/*profil */}
        <div className="profile flex">
          <img
            src="https://img.icons8.com/bubbles/50/null/edvard-munch.png"
            alt=""
            className="w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full"
          ></img>
          <div className="details flex flex-col ml-4">
            <span className="text-[1rem]">Loneliest</span>
            <span className="text-sm text-gray-500">Maneskin</span>
          </div>
        </div>

        <div>
          <img
            className="h-[1rem]"
            src="https://img.icons8.com/ios-glyphs/30/null/menu-2.png"
            alt=""
          ></img>
        </div>
      </div>
      {/*lower part */}

      <div className="lowerPart flex justify-between mt-5">
        <div className="track flex justify-between text-sm text-gray-500 flex[2] items-center">
          <span>1 : 18</span>
        </div>

        {/*controls */}

        <div className="controls flex-1 flex items-center justify-around ">
          {/*previous arrow */}
          <svg width={10.455} height="12.442" viewBox="0 0 10.455 12.442">
            <path
              d="M62.208,5.066,69.119.334A1.687,1.687,0,0,1,70.027,0c.517,0,.836.415.836,1.109V11.334c0,.693-.319,1.107-.835,1.107a1.673,1.673,0,0,1-.9-.335L62.211,7.376A1.419,1.419,0,0,1,61.52,6.22,1.414,1.414,0,0,1,62.208,5.066Z"
              transform="translate(-61.52 0)"
              fill="#4b537b"
            />
            <rect
              id="Rectangle_15"
              data-name="Rectangle 15"
              width="1"
              height="12"
              rx="0.5"
              transform="translate(0.432 0.221)"
              fill="#4b537b"
            />
          </svg>

          {/*pause button */}

          <div className="pauseButton flex items-center relative">
            {/* circle */}
            <svg width="40" height="40" viewBox="0 0 40 40">
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#f2061d" />
                  <stop offset="1" stop-color="#e600fe" />
                </linearGradient>
              </defs>
              <path
                id="Subtraction_1"
                data-name="Subtraction 1"
                d="M-2018-1015a19.87,19.87,0,0,1-14.142-5.858A19.869,19.869,0,0,1-2038-1035a19.869,19.869,0,0,1,5.858-14.142A19.869,19.869,0,0,1-2018-1055a19.869,19.869,0,0,1,14.142,5.858A19.869,19.869,0,0,1-1998-1035a19.869,19.869,0,0,1-5.858,14.142A19.869,19.869,0,0,1-2018-1015Zm0-39a19.021,19.021,0,0,0-19,19,19.021,19.021,0,0,0,19,19,19.021,19.021,0,0,0,19-19A19.021,19.021,0,0,0-2018-1054Z"
                transform="translate(2038 1055)"
                fill="url(#linear-gradient)"
              />
            </svg>
            {/* pause */}
            <svg
              width="12.327"
              height="16.417"
              viewBox="0 0 12.327 16.417"
              className="absolute left-[0.85rem]"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="2.686"
                  y1="0.162"
                  x2="0"
                  y2="1.074"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#f2061e" />
                  <stop offset="1" stop-color="#e600fd" />
                </linearGradient>
              </defs>
              <rect
                id="Rectangle_12"
                data-name="Rectangle 12"
                width="3.625"
                height="16.417"
                rx="1.813"
                transform="translate(0)"
                fill="url(#linear-gradient)"
              />
              <rect
                id="Rectangle_13"
                data-name="Rectangle 13"
                width="3.625"
                height="16.417"
                rx="1.813"
                transform="translate(8.701)"
                fill="url(#linear-gradient)"
              />
            </svg>
          </div>
          {/* next arrow */}
          <svg width="10.455" height="12.442" viewBox="0 0 10.455 12.442">
            <path
              id="Path_3"
              data-name="Path 3"
              d="M70.175,5.066,63.264.334A1.687,1.687,0,0,0,62.356,0c-.517,0-.836.415-.836,1.109V11.334c0,.693.319,1.107.835,1.107a1.673,1.673,0,0,0,.9-.335l6.914-4.731a1.419,1.419,0,0,0,.691-1.155A1.414,1.414,0,0,0,70.175,5.066Z"
              transform="translate(-61.52 0)"
              fill="#4b537b"
            />
            <rect
              id="Rectangle_14"
              data-name="Rectangle 14"
              width="1"
              height="12"
              rx="0.5"
              transform="translate(9.455 0.221)"
              fill="#4b537b"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
