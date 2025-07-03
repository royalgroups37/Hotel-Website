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
  <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-20 py-16 flex flex-col md:flex-row flex-wrap justify-between gap-y-12">
    
    {/* Logo + Socials */}
    <div className="flex flex-col gap-4 w-full sm:w-1/2 md:w-[180px]">
      <p className="text-2xl font-bold text-[#2c2c2c]">LOGO</p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <p className="text-2xl text-[#2c2c2c]"></p>
          <p className="text-sm text-[#757272]">Facebook</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-2xl text-[#2c2c2c]"></p>
          <p className="text-sm text-[#757272]">Twitter</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-2xl text-[#2c2c2c]"></p>
          <p className="text-sm text-[#757272]">Instagram</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-2xl text-[#2c2c2c]"></p>
          <p className="text-sm text-[#757272]">Youtube</p>
        </div>
      </div>
    </div>

    {/* Locations */}
    <div className="flex flex-col gap-4 w-full sm:w-1/2 md:w-[180px]">
      <p className="text-sm font-bold text-[#2c2c2c]">Locations</p>
      {[
        'Hyderabad', 'Mumbai', 'New Delhi', 'Vizag',
        'Chennai', 'Kerala', 'Rajasthan', 'Bangalore',
      ].map((city, idx) => (
        <p key={idx} className="text-sm text-[#757272]">{city}</p>
      ))}
    </div>

    {/* Amenities */}
    <div className="flex flex-col gap-4 w-full sm:w-1/2 md:w-[180px]">
      <p className="text-sm font-bold text-[#2c2c2c]">Amenities</p>
      {[
        'Outdoor pool', 'Indoor Pool', 'Restaurant',
        'Room Service', 'Fitness center', 'Free Wifi',
      ].map((item, idx) => (
        <p key={idx} className="text-sm text-[#757272]">{item}</p>
      ))}
    </div>

    {/* Property Types */}
    <div className="flex flex-col gap-4 w-full sm:w-1/2 md:w-[180px]">
      <p className="text-sm font-bold text-[#2c2c2c]">Property Type</p>
      {['Villa', 'Hotel', 'Resorts', 'Cabins', 'Apartments'].map((type, idx) => (
        <p key={idx} className="text-sm text-[#757272]">{type}</p>
      ))}
    </div>

    {/* Contact Us */}
    <div className="flex flex-col gap-4 w-full sm:w-1/2 md:w-[180px]">
      <p className="text-sm font-bold text-[#2c2c2c]">Contact Us</p>
      {[
        '+00 12345 6789', '+00 12345 6789',
        '+00 12345 6789', 'Project Manager',
      ].map((contact, idx) => (
        <p key={idx} className="text-sm text-[#757272]">{contact}</p>
      ))}
    </div>
  </div>
</footer>

  );
}
