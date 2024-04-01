import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image2 from "../../Assets/features-app.png";
import Image from "../../Assets/app-frame.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <div className="">
      <div className="pt-20 grid justify-items-center">
        <p className="text-[32px] font-semibold">App Screenshots.</p>
        <p className="text-center pb-8">
          Alii nusquam cu duo, vim eu consulatu percipitur, meis dolor
          comprehensam at vis. <br /> Vel ut percipitur dignissim signiferumque.
        </p>
      </div>
      <div className="">
        <div className="flex justify-center -z-50">
          <img
            className="absolute flex justify-center h-[65vh] -z-50"
            src={Image}
            alt=""
          />
        </div>
        <div className="flex justify-center w-[90%] m-auto relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className=""
          >
            <SwiperSlide>
              <img className="w-full" src={Image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={Image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={Image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={Image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={Image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={Image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={Image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={Image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full" src={Image2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
