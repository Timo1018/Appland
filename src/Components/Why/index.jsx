import { BsShieldCheck } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { AiOutlineLayout } from "react-icons/ai";
import { BiLayer } from "react-icons/bi";
import React from "react";

const Why = () => {
  return (
    <div className="xl:pt-44 px-4 lg:mt-10">
      <div className="flex justify-center">
        <div className="grid justify-items-center lg:w-[50%] text-center">
          <p className="xl:text-[35px] lg:text-[32px] text-[24px] font-bold text-[#38424d] pb-2">
            Why You Should Choose AppLand
          </p>
          <p className="text-[#747e88] text-center xl:w-[80%]">
            Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor
            comprehensam at vis. Vel ut percipitur dignissim signiferumque.
          </p>
        </div>
      </div>
      <div className="grid md:grid md:grid-cols-2 mt-10 md:px-6 xl:px-52 text-center xl:grid xl:grid-cols-4 gap-10 lg:flex">
        <div className="p-6 shaddow py-8">
          <div className="flex justify-center items-center py-2">
            <div className="w-[79px] h-[79px] rounded-full text-white bg-[#e7a019] justify-center flex items-center">
              <BiLayer size={56} />
            </div>
          </div>
          <p className="py-5 text-[25px] hover:text-[#e7a019] duration-500">
            {" "}
            Clean Design
          </p>
          <p>
            Lorem ipsum dolor sitam etco snsetetur sadipscing elitr sed diam
            nonumy.
          </p>
        </div>
        <div className="p-6 shaddow py-8">
          <div className="flex justify-center items-center py-2">
            <div className="w-[79px] h-[79px] rounded-full text-white bg-[#e54f4f] justify-center flex items-center">
              <AiOutlineLayout size={56} />
            </div>
          </div>
          <p className="py-5 text-[25px] hover:text-[#e54f4f] duration-500">
            {" "}
            Easy to Use
          </p>
          <p>
            Lorem ipsum dolor sitam etco snsetetur sadipscing elitr sed diam
            nonumy.
          </p>
        </div>
        <div className="p-6 shaddow py-8">
          <div className="flex justify-center items-center py-2">
            <div className="w-[79px] h-[79px] rounded-full text-white bg-[#8950e4] justify-center flex items-center">
              <AiOutlineThunderbolt size={56} />
            </div>
          </div>
          <p className="py-5 text-[25px] hover:text-[#8950e4] duration-500">
            {" "}
            Fast Loading
          </p>
          <p>
            Lorem ipsum dolor sitam etco snsetetur sadipscing elitr sed diam
            nonumy.
          </p>
        </div>
        <div className="p-6 shaddow py-8">
          <div className="flex justify-center items-center py-2">
            <div className="w-[79px] h-[79px] rounded-full text-white bg-[#0898e7] justify-center flex items-center">
              <BsShieldCheck size={56} />
            </div>
          </div>
          <p className="py-5 text-[25px] hover:text-[#0898e7] duration-500">
            {" "}
            All Elements
          </p>
          <p>
            Lorem ipsum dolor sitam etco snsetetur sadipscing elitr sed diam
            nonumy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
