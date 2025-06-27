import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { FaStar, FaMapMarkerAlt, FaHeart, FaShareAlt, FaStarOfLife } from 'react-icons/fa';

import ClientMapWithAmenities from '../../components/ClientMapWithAmenities';
import Reviews from '../../components/Reviews';
import { MdAutoAwesome } from "react-icons/md";

const features = [
  { label: "Near park" },
  { label: "Near nightlife" },
  { label: "Near theater" },
  { label: "Clean Hotel" },
];
const BookingHistory = () => {
  return (
    <div className="min-h-screen bg-white tracking-wide">
      <Header />
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between gap-6">
        {/* Left section */}
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <p className="text-2xl font-bold text-[#2c2c2c]">Taj Krishna, Hyderabad</p>
            <div className="flex items-center gap-1 text-[#FF385C]">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              <span className="text-xs font-medium text-[#2c2c2c] ml-2">5 Star Hotel</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2 text-sm text-[#2c2c2c] opacity-75">
            <FaMapMarkerAlt className="mt-1" />
            <p>
              Rd Number 1, near Bartel India Expo, Mada Manzil, Banjara Hills, Hyderabad,
              Telangana
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 text-black">
            <div className="border border-[#8dd3bb] px-3 py-1 rounded text-xs font-medium">
              4.2
            </div>
            <p className="text-xs">
              <span className="font-bold">Very Good</span>
              <span className="font-medium"> – 371 reviews</span>
            </p>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col gap-4 items-end w-full md:w-1/3">
          <p className="text-2xl font-bold text-right text-[#2c2c2c]">
            ₹10,000
            <span className="text-sm font-bold text-[#2c2c2c]"> / </span>
            <span className="text-sm font-bold text-[#757272]">night</span>
          </p>

          {/* Action buttons */}
          <div className="flex gap-3">
            <button className="w-10 h-10 flex items-center justify-center border border-[#ff385c] rounded">
              <FaHeart size={20} className="text-[#2c2c2c]" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-[#ff385c] rounded">
              <FaShareAlt size={20} className="text-[#2c2c2c]" />
            </button>
            <button className="px-4 py-2 bg-[#ff385c] rounded text-sm font-semibold text-white">
              Book now
            </button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1240px] mx-auto h-auto md:h-[550px] flex flex-col md:flex-row gap-2">
        {/* Left main image */}
        <img
          src="/rectangle-3.png"
          alt="Main"
          className="w-full md:w-[50%] h-60 md:h-full object-cover rounded-tl-xl md:rounded-bl-xl md:rounded-tr-none rounded-tr-xl"
        />

        {/* Right side grid */}
        <div className="w-full md:w-[50%] flex flex-col gap-2">
          <div className="flex gap-2 h-1/2">
            <img
              src="/rectangle-5.png"
              alt="Top Left"
              className="w-1/2 object-cover h-28 md:h-full"
            />
            <img
              src="/rectangle-6.png"
              alt="Top Right"
              className="w-1/2 object-cover h-28 md:h-full rounded-tr-xl"
            />
          </div>
          <div className="relative flex gap-2 h-1/2">
            <img
              src="/rectangle-16.png"
              alt="Bottom Left"
              className="w-1/2 object-cover h-28 md:h-full"
            />
            <img
              src="/rectangle-37.png"
              alt="Bottom Right"
              className="w-1/2 object-cover h-28 md:h-full rounded-br-xl"
            />

            {/* Button overlay */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none md:pointer-events-auto">
              <button className="bg-[#ff385c] text-white text-sm font-semibold px-4 py-2 rounded shadow-md">
                View all photos
              </button>
            </div>
          </div>
        </div>
      </div>



      <div className="w-full max-w-[1232px] mx-auto px-4 md:px-0 flex flex-col gap-6">
        {/* Overview Text */}
        <div className="flex flex-col items-start gap-4 w-full">
          <p className="text-xl md:text-2xl font-bold text-[#2c2c2c]">Overview</p>
          <p className="text-base font-medium text-[#2c2c2c] opacity-75 leading-relaxed">
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
            est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
            lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
            rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
            convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            <br /><br />
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed
            ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
            Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum
            eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend.
            Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis
            nisi, ac posuere leo.        </p>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-wrap gap-4 justify-start">
          {/* Rating Box */}
          <div className="w-full sm:w-[166px] h-[145px] p-4 rounded-xl bg-[#ff385c] flex flex-col justify-between text-[#f4f4f4]">
            <p className="text-[32px] font-bold">4.2</p>
            <div>
              <p className="text-base font-bold">Very good</p>
              <p className="text-sm font-medium">371 reviews</p>
            </div>
          </div>

          {/* Dynamic Cards */}
          {features.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-[160px] h-[145px] p-4 rounded-xl border border-[#ff385c] flex flex-col items-start justify-between text-[#2c2c2c]"
            >
              <MdAutoAwesome className="w-6 h-6 text-[#2c2c2c]" />
              <p className="text-base font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <ClientMapWithAmenities />

      <Reviews />
      <Footer />
    </div>
  );
};

export default BookingHistory;
