import React from "react";
import Image from '../../Assets/author-1.jpg'
import Image4 from '../../Assets/author-2.jpg'
import Image3 from '../../Assets/author-6.jpg'
import Image2 from '../../Assets/author-5.jpg'
import Image5 from '../../Assets/author-3.jpg'


const Userreviews = () => {
  return (
    <div className="w-full bg-[#f3fdff] my-28 py-20">
      <div className="flex justify-center items-center text-center">
        <div>
          <div className="grid justify-center items-center text-center">
            <p className="text-[35px] font-semibold font-[sans-serif] text-[#38424d]">
              User Reviews.
            </p>
            <p className="pb-10 pt-6">
              Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor
              comprehensam at vis. <br /> Vel ut percipitur dignissim signiferumque.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="xl:w-[50%] w-[90%] bg-white shaddowphone rounded-lg p-10">
              <p>
                Lorem ipsum dolor situt amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempo invidunt labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eoset accusam et justo
                duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor amet sadipscing elitr.
              </p>
              <p className="text-[22px] font-medium mt-4"> Linda Sophia</p>
              <p> Designer, SpaceX</p>
            </div>
          </div>
          <div className="flex justify-center xl:gap-6 gap-2 items-center mt-8">
            <img className="rounded-full border-4 border-white w-24 h-24 xl:flex lg:flex md:flex hidden" src={Image2} alt="" />
            <img className="rounded-full border-4 border-white w-24 h-24" src={Image3} alt="" />
            <img className="rounded-full border-4 border-white w-32 h-32" src={Image} alt="" />
            <img className="rounded-full border-4 border-white w-24 h-24" src={Image4} alt="" />
            <img className="rounded-full border-4 border-white w-24 h-24 xl:flex lg:flex md:flex hidden" src={Image5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userreviews;
