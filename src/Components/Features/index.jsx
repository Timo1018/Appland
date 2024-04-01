import { BiLeaf } from "react-icons/bi";
import { BsBootstrapFill } from "react-icons/bs";
import { MdOutlineDevices } from "react-icons/md";
import React from "react";
import Image from "../../Assets/features-app.png";

const Features = () => {
  return (
    <div>
      <div className="flex justify-center xl:mt-16 lg:mt-16">
        <div className="grid justify-items-center lg:w-[50%] text-center">
          <p className="xl:text-[35px] lg:text-[32px] text-[24px] font-bold text-[#38424d] pb-2">
            Awesome Key Features.
          </p>
          <p className="text-[#747e88] text-center xl:w-[80%]">
            Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor
            comprehensam at vis. Vel ut percipitur dignissim signiferumque.
          </p>
        </div>
      </div>
      <div className="grid lg:flex xl:flex justify-center items-start xl:px-56 lg:px-32 pt-20 gap-20 md:px-10">
        <div className="grid xl:w-[50%] w-full gap-10">
          <div className="flex justify-around shaddow xl:p-8 p-6 gap-8">
            <div>
              <div className="w-[76px] h-[76px] rounded-full bg-[#0898e7] text-white flex justify-center items-center">
                <MdOutlineDevices size={50} />
              </div>
            </div>
            <div>
              <p className="font-semibold text-[28px]"> Fully Responsive</p>
              <p>
                Lorem ipsum dolor sit ametco snsetetur sadipscing elitr sed diam
                nonumy eirmod.
              </p>
            </div>
          </div>
          <div className="flex justify-around shaddow xl:p-8 p-6 gap-8">
            <div>
              <div className="w-[76px] h-[76px] rounded-full bg-[#8950e4] text-white flex justify-center items-center">
                <BiLeaf size={50}/>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[28px]"> Refreshing Design</p>
              <p>
                Lorem ipsum dolor sit ametco snsetetur sadipscing elitr sed diam
                nonumy eirmod.
              </p>
            </div>
          </div>
          <div className="flex justify-around shaddow xl:p-8 p-6 gap-8">
            <div>
              <div className="w-[76px] h-[76px] rounded-full bg-[#fdb11b] text-white flex justify-center items-center">
                <BsBootstrapFill size={50} />
              </div>
            </div>
            <div>
              <p className="font-semibold text-[28px]"> Bootstrap 4</p>
              <p>
                Lorem ipsum dolor sit ametco snsetetur sadipscing elitr sed diam
                nonumy eirmod.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-[50%] flex justify-end md:justify-center">
          <img className="xl:w-[300px] w-[300px] xl:ml-32 mt-10 shaddowphone" src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
