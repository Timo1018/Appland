import React from "react";
import Roundedmobile from "../Components/Roundedmobile";
import Why from "../Components/Why";
import Features from "../Components/Features";
import Homeheader from "../Components/Home";
import Carts from "../Components/Carts";
import Userreviews from "../Components/Userreviews";
import Download from "../Components/Download";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";

const Layout = () => {
  return (
    <div>
      <Homeheader />
      <Why />
      <Roundedmobile />
      <Features />
      <Carousel />
      <Userreviews />
      <Carts />
      <Download />
      <Footer />
    </div>
  );
};

export default Layout;
