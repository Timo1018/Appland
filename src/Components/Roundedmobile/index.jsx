import React from "react";
import Image from "../../Assets/about-app.png";

const Roundedmobile = () => {
  return (
    <div className="bg-[#f3fdff] py-32 mt-32 md:px-10 grid xl:flex lg:flex justify-center items-center xl:px-0 px-4">
      <div className="xl:w-[50%] md:w-[70%] lg:w-[50%] xl:ml-10 xl:flex xl:justify-center lg:flex lg:justify-start justify-center">
        <img src={Image} className="xl:w-[300px] md:w-[300px] md:ml-28 lg:ml-20 lg:w-[280px] w-[200px] -rotate-[28deg] xl:ml-0" alt="" />
      </div>
      <div className="xl:w-[50%] lg:w-[50%] md:pt-10">
        <p className="xl:text-[35px] text-[20px] md:text-[34px] font-bold text-[#38424d] pb-2">
          Comes With All You Need.
        </p>
        <p className="xl:w-[80%] xl:py-6 lg:py-6">
          Alii nusquam cu duo, vim eu consulatu percipitur, meis doorcomprehen
          sam at vis. Vel ut dignissim signiferumq Alii nusquam cuduo, vim eusde
          consulatu percipitur, meis dolor comprehensam at vij. Alii nusquam cu
          duo, vim eu consulatu percipitur, meis doorcomprehen sam at vis. Vel
          ut dignissim signiferumq nusquam.
        </p>
        <button className="px-4 py-3 bg-[#0898e7] rounded text-white mt-4"> Get The App</button>
      </div>
    </div>
  );
};

export default Roundedmobile;
