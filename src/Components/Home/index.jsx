import { BsPlay } from "react-icons/bs";
import React from "react";
import Navbar from "../Navbar";
import Image from "../../Assets/header-app.png";

const Homeheader = () => {
  return (
    <div
      className="backgroundimage1 xl:h-[106vh]">
      <div className="backgroundimage xl:h-[90vh]">
        <Navbar />
        <div className="grid xl:flex lg:flex justify-center xl:py-10 xl:px-44 md:px-24 xl:gap-56 lg:gap-44 px-4">
          <div className="xl:w-[60%] lg:w-[60%] xl:mt-24">
            <p className="xl:text-[42px] text-[24px] md:text-[40px] font-bold grid text-[#38424d] py-6 xl:py-0">
              <p>
                <span className="text-[#0898e7]"> Launch Your App</span> With{" "}
              </p>
              <p> Confidence and </p> Creativity.
            </p>
            <p className="xl:w-[90%] text-[#747e88] text-[17px]">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              diamnon umy eirmomp or invidunt ut labore et dolore magna aliquyam
              eratse diam voluptua. At vero eosaccusam.
            </p>
            <div className="flex gap-10 items-center pt-10">
              <button className="p-3.5 px-6 bg-[#0898e7] text-white rounded">
                Download Now
              </button>
              <button className="animationbutton text-[32px] justify-center w-12 h-12 flex items-center rounded-full bg-[#0898e7] text-white">
                <BsPlay />
              </button>
            </div>
          </div>
          <div className="w-full xl:w-[40%] lg:w-[40%] flex xl:justify-normal justify-center xl:py-0 lg:py-0 py-20">
            <img
              className="absolute xl:flex hidden top-[570px] right-[300px] translate-x-10"
              src="https://preview.uideck.com/items/appland/assets/images/image-shape.svg"
              alt=""
            />
            <img
              className="xl:w-[90%] lg:w-[400px] w-[80%] md:w-[60%] relative"
              src={Image}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeheader;
