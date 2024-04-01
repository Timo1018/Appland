import React from "react";
import Image from "../../Assets/header-app.png";
import Imagebutton from "../../Assets/app-store.png";
import Imagebutton2 from "../../Assets/play-store.png";

const Download = () => {
  return (
    <div className="mt-32">
      <div className="grid md:grid lg:flex xl:flex justify-center items-center px-4">
        <div className="xl:w-[50%] lg:w-[50%] flex justify-center">
          <img className="w-[300px] shaddow rounded-[50px]" src={Image} alt="" />
        </div>
        <div className="xl:w-[50%] lg:w-[50%] grid justify-center gap-10">
          <p className="xl:text-[34px] lg:text-[30px] text-[24px] font-bold text-[#38424d]">Download and Start Using!</p>
          <p className="w-[76%]">
            Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen
            sam at vis. Vel ut dignissim signiferumq Alii nusquam cuduo, vim
            eusde consulatu percipitur, meis dolor comprehensam at vij. Alii
            nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen sam
            at vis. Vel ut dignissim signiferumq nusquam.
          </p>
          <div className="grid xl:flex gap-8">
            <button className="w-[210px] h-[65px] rounded-md bg-[#0898e7] flex justify-center items-center">
              <img src={Imagebutton} alt="" />
            </button>
            <button className="w-[210px] h-[65px] rounded-md bg-[#525a63] flex justify-center items-center">
              <img src={Imagebutton2} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
