'use client';

import Image from "next/image";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";

const locations = [
  { city: "Hyderabad", state: "TELANGANA", image: "/Container.png", properties: 1527 },
  { city: "New Delhi", state: "DELHI", image: "/NewDelhi.png", properties: 4688 },
  { city: "Mumbai", state: "MAHARASHTRA", image:"/Container-3.png", properties: 1766 },
  { city: "Goa", state: "GOA", image: "/Container-2.png",properties: 4728 },
  { city: "Chennai", state: "TAMIL NADU", image: "/Container-1.png", properties: 1401 },
  { city: "Jaipur", state: "RAJASTHAN", image: "/Container-1.png", properties: 1902 },
  { city: "Kolkata", state: "WEST BENGAL", image: "/Container-1.png", properties: 2109 },
];

export default function DiscoverStay() {
  return (
    <div className="w-full max-w-[1240px] mx-auto mt-10 px-4">
      {/* Title */}
      <p className="text-[25.375px] font-medium text-[#191e3b] mb-4">
        Discover your new favourite stay
      </p>

      {/* Horizontal Scroll Cards */}
      <div className="overflow-x-auto">
        <div className="flex gap-6 w-max mb-10">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="w-[232px] h-[345px] rounded-xl overflow-hidden bg-white shadow-sm flex-shrink-0"
            >
              {/* Image Section */}
              <div className="relative w-[232px] h-[290px]">
                <Image
                  src={loc.image}
                  alt={loc.city}
                  fill
                  className="object-cover rounded-[20px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-[20px] flex flex-col justify-end p-4">
                  <p className="text-white text-xl text-center">{loc.city}</p>
                  <p className="text-white text-[10px] uppercase text-center tracking-wider">
                    {loc.state}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-4 border-t border-[#848794] rounded-b-[20px]">
                <p className="text-sm text-[#2c2c2c]">
                  <span className="font-bold">{loc.properties}</span> Properties
                </p>
                <FaArrowRight className="text-[#2c2c2c]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicator (Optional) */}
      <div className="flex justify-center w-full mt-4">
        <div className="flex gap-1 items-center w-10 h-[5px] bg-zinc-200 rounded-xl">
          <div className="w-2.5 h-[5px] bg-[#0770e4] rounded-full" />
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-[1.25px] h-[5px] bg-white rounded-full" />
          ))}
        </div>
      </div>

      {/* Right Arrow (Optional Scroll Hint/Icon) */}
      <div className="flex justify-end w-full mt-2">
        <div
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md"
          style={{ boxShadow: '0px 4px 30px -5px rgba(29,38,60,0.25)' }}
        >
          <FaLongArrowAltRight className="text-[#0770E4]" />
        </div>
      </div>
    </div>
  );
}
