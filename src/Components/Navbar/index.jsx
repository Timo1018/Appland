import React from 'react'
import Image from '../../Assets/logo.png'
import jQuery from 'jquery';

const Navbar = () => {
  jQuery(function ($) {
    var $navbar = $(".navbar");
    $(window).scroll(function (event) {
      var $current = $(this).scrollTop();
      if ($current > 0) {
        $navbar.addClass("navbar-color");
      } else {
        $navbar.removeClass("navbar-color");
      }
    });
  });

  return (
    <div>
      <div className='navbar flex justify-between xl:py-9 xl:px-56 py-10'>
        <div className='flex items-center justify-between'>
          <img className='w-36' src={Image} alt="" />
        </div>
        <div className='hidden xl:flex items-center justify-between gap-12 font-semibold'>
          <p className='text-blue-500'> Home</p>
          <p className='hover:text-blue-400 duration-500'> Why</p>
          <p className='hover:text-blue-400 duration-500'> Features</p>
          <p className='hover:text-blue-400 duration-500'> Screenshots</p>
          <p className='hover:text-blue-400 duration-500'> Pricing</p>
          <p className='hover:text-blue-400 duration-500'> Download</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar