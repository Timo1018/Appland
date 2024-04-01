import { BiMapAlt } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import React from "react";
import Image from "../../Assets/logo.png";

const Footer = () => {
  return (
    <div className="plarniotasi mt-20">
      <div className="flex flex-wrap gap-10 md:grid md:grid-cols-2 lg:flex xl:flex justify-center items-start xl:px-32 px-4 lg:px-4 pb-20">
        <div className="grid xl:w-[22%]">
          <img className="w-[220px]" src={Image} alt="" />
          <h6 className="py-6">
            Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </h6>
          <div className="flex gap-4 text-[22px]">
            <p className="text-[#747e88] hover:text-[#078ED9] duration-200">
              <FiFacebook />
            </p>
            <p className="text-[#747e88] hover:text-[#078ED9] duration-200">
              <CiTwitter />
            </p>
            <p className="text-[#747e88] hover:text-[#078ED9] duration-200">
              <AiOutlineInstagram />
            </p>
            <p className="text-[#747e88] hover:text-[#078ED9] duration-200">
              <SlSocialLinkedin />
            </p>
          </div>
        </div>
        <div className="grid xl:w-[20%] gap-2 lg:justify-center xl:justify-center">
          <h2 className="pb-2"> Quick Links</h2>
          <p> Home</p>
          <p> Features</p>
          <p> Testimonial</p>
          <p> Pricing</p>
          <p> Contact</p>
        </div>
        <div className="grid xl:w-[20%] gap-2">
          <h2 className="pb-2"> Support</h2>
          <p> FAQ</p>
          <p> Privacy Policy</p>
          <p> Terms Of Use</p>
          <p> Legel</p>
          <p> Site Map</p>
        </div>
        <div className="grid xl:w-[20%] gap-3">
          <h2> Quick Link</h2>
          <p className="flex gap-2 pt-3">
            <BiPhone /> +809272561823
          </p>
          <p className="flex gap-2">
            <BiEnvelope /> info@appland.com
          </p>
          <p className="flex gap-2">
            <BiWorld /> www.yourweb.com
          </p>
          <p className="flex gap-2">
            <BiMapAlt /> 23 Stree New York City , United States Of America 750.
          </p>
        </div>
      </div>
      <div className="xl:w-[100%] flex justify-center">
        <div className="border-t-2 xl:w-[74%] w-[90%] py-4 flex justify-between border-black">
            <p> Crafted by <span className="text-green-600"> UIdeck</span></p>
            <p> Report Issues</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
