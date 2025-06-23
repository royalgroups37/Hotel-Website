'use client';
import React, { useState } from 'react';
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaXTwitter,
  FaWhatsapp,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa6';

export default function Footer() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(prev => (prev === menu ? null : menu));
  };

  return (
    <footer className="bg-[#f4f4f4] w-full">
      <div className="flex justify-between items-center w-[1440px] px-[100px] py-28">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-4">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 py-px">
            <div className="flex-grow-0 flex-shrink-0 w-[69px] h-6">
              <div className="flex justify-start items-center absolute left-0 top-px">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-center text-[#2c2c2c]">
                    LOGO
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[126px] relative gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#2c2c2c]"></p>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Facebook</p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[126px] relative gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#2c2c2c]"></p>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Twitter</p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[126px] relative gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#2c2c2c]"></p>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Instagram</p>
            </div>
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[126px] relative gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-2xl text-left text-[#2c2c2c]"></p>
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Youtube</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-5">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#2c2c2c]">
            Locations
          </p>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Hyderabad</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Mumbai</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">New Delhi</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Vizag</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Chennai</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Kerala</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Rajasthan</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Bangalore</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[312px] relative gap-5">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#2c2c2c]">
            Amenities
          </p>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Outdoor pool</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Indoor Pool</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Restaurant</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Room Service</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Fitness center</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Free Wifi</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[312px] relative gap-5">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#2c2c2c]">
            Property Type
          </p>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Villa</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Hotel</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Resorts</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Cabins</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Apartments</p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[312px] w-[152px] relative gap-5">
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#2c2c2c]">
            Contact us
          </p>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">+00 12345 6789</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">+00 12345 6789</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">+00 12345 6789</p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#757272]">Project Manager</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
