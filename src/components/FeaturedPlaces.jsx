'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaHeart, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

// City-based hotel data
const hotels = [
  {
    city: 'Hyderabad',
    title: 'Taj Mahal Hotel',
    subtitle: 'Entire suite · 2 beds',
    location: 'Banjara Hills, Hyderabad',
    price: '₹6,500',
    rating: 4.7,
    reviews: 98,
    discount: '-15% today',
    image: '/Image.png',
  },
   {
    city: 'Hyderabad',
    title: 'Taj Mahal Hotel',
    subtitle: 'Entire suite · 2 beds',
    location: 'Banjara Hills, Hyderabad',
    price: '₹6,500',
    rating: 4.7,
    reviews: 98,
    discount: '-15% today',
    image: '/Image.png',
  }, {
    city: 'Hyderabad',
    title: 'Taj Mahal Hotel',
    subtitle: 'Entire suite · 2 beds',
    location: 'Banjara Hills, Hyderabad',
    price: '₹6,500',
    rating: 4.7,
    reviews: 98,
    discount: '-15% today',
    image: '/Image.png',
  }, {
    city: 'Hyderabad',
    title: 'Taj Mahal Hotel',
    subtitle: 'Entire suite · 2 beds',
    location: 'Banjara Hills, Hyderabad',
    price: '₹6,500',
    rating: 4.7,
    reviews: 98,
    discount: '-15% today',
    image: '/Image.png',
  }, {
    city: 'Hyderabad',
    title: 'Taj Mahal Hotel',
    subtitle: 'Entire suite · 2 beds',
    location: 'Banjara Hills, Hyderabad',
    price: '₹6,500',
    rating: 4.7,
    reviews: 98,
    discount: '-15% today',
    image: '/Image.png',
  }, {
    city: 'Hyderabad',
    title: 'Taj Mahal Hotel',
    subtitle: 'Entire suite · 2 beds',
    location: 'Banjara Hills, Hyderabad',
    price: '₹6,500',
    rating: 4.7,
    reviews: 98,
    discount: '-15% today',
    image: '/Image.png',
  },
  {
    city: 'New Delhi',
    title: 'The Imperial',
    subtitle: 'Luxury room · 1 king bed',
    location: 'Connaught Place, New Delhi',
    price: '₹9,200',
    rating: 4.8,
    reviews: 145,
    discount: '-20% today',
    image: '/Image.png',
  },
    {
    city: 'New Delhi',
    title: 'The Imperial',
    subtitle: 'Luxury room · 1 king bed',
    location: 'Connaught Place, New Delhi',
    price: '₹9,200',
    rating: 4.8,
    reviews: 145,
    discount: '-20% today',
    image: '/Image.png',
  },  {
    city: 'New Delhi',
    title: 'The Imperial',
    subtitle: 'Luxury room · 1 king bed',
    location: 'Connaught Place, New Delhi',
    price: '₹9,200',
    rating: 4.8,
    reviews: 145,
    discount: '-20% today',
    image: '/Image.png',
  },  {
    city: 'New Delhi',
    title: 'The Imperial',
    subtitle: 'Luxury room · 1 king bed',
    location: 'Connaught Place, New Delhi',
    price: '₹9,200',
    rating: 4.8,
    reviews: 145,
    discount: '-20% today',
    image: '/Image.png',
  },
  {
    city: 'Mumbai',
    title: 'Sea View Residency',
    subtitle: 'Entire apartment · 2 beds',
    location: 'Marine Drive, Mumbai',
    price: '₹11,000',
    rating: 4.6,
    reviews: 172,
    discount: '-10% today',
    image: '/Image.png',
  },
   {
    city: 'Mumbai',
    title: 'Sea View Residency',
    subtitle: 'Entire apartment · 2 beds',
    location: 'Marine Drive, Mumbai',
    price: '₹11,000',
    rating: 4.6,
    reviews: 172,
    discount: '-10% today',
    image: '/Image.png',
  }, {
    city: 'Mumbai',
    title: 'Sea View Residency',
    subtitle: 'Entire apartment · 2 beds',
    location: 'Marine Drive, Mumbai',
    price: '₹11,000',
    rating: 4.6,
    reviews: 172,
    discount: '-10% today',
    image: '/Image.png',
  },
  {
    city: 'Goa',
    title: 'Beachfront Villa',
    subtitle: 'Entire villa · 3 beds',
    location: 'Calangute, Goa',
    price: '₹8,500',
    rating: 4.9,
    reviews: 210,
    discount: '-18% today',
    image: '/Image.png',
  },
  {
    city: 'Chennai',
    title: 'Bay Breeze Hotel',
    subtitle: 'Private room · 1 bed',
    location: 'Besant Nagar, Chennai',
    price: '₹5,800',
    rating: 4.5,
    reviews: 84,
    discount: '-12% today',
    image: '/Image.png',
  },
];

const FeaturedPlaces = () => {
  const [selectedCity, setSelectedCity] = useState('Hyderabad');
  const cities = ['Hyderabad', 'New Delhi', 'Mumbai', 'Goa', 'Chennai'];

  const filteredHotels = hotels.filter(hotel => hotel.city === selectedCity);

  return (
    <section className="max-w-screen-xl mx-auto p-6">
      <div className="flex flex-col gap-12">
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-800">Featured places to stay</h2>
          <p className="text-base text-gray-500 mt-1">
            Popular places to stay that Chisfis recommends for you
          </p>
        </div>

        {/* City Tabs */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex gap-3 flex-wrap overflow-x-auto scrollbar-hide">
            {cities.map(city => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-5 py-2 rounded-full text-base font-medium ${
                  selectedCity === city
                    ? 'bg-[#ff385c] text-white'
                    : 'text-[#757272] border border-gray-300'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <button className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-full text-[#757272]">
            Search more
            <svg
              width={24}
              height={24}
              fill="none"
              stroke="#2C2C2C"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M14 5L21 12L14 19M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Cards */}
        {filteredHotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredHotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm"
              >
                <div className="relative w-full h-[223px]">
                  <Image
                    src={hotel.image}
                    alt={hotel.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="w-[5px] h-[5px] bg-gray-300 rounded-full" />
                    ))}
                    <span className="w-[8px] h-[8px] bg-white rounded-full" />
                  </div>
                  <div className="absolute top-2 left-3 px-3 py-1 text-xs text-white bg-[#ff385c] rounded-full">
                    {hotel.discount}
                  </div>
                  <div className="absolute top-2 right-3 bg-black/40 p-1 rounded-full">
                    <FaHeart className="text-white text-sm" />
                  </div>
                </div>

                <div className="p-4 flex flex-col gap-3">
                  <p className="text-sm text-[#808080]">{hotel.subtitle}</p>
                  <p className="text-lg font-medium text-gray-800">{hotel.title}</p>
                  <div className="flex items-center gap-2 text-sm text-[#808080]">
                    <FaMapMarkerAlt className="text-gray-400" />
                    {hotel.location}
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="flex justify-between items-center text-sm text-[#757272]">
                    <span>
                      <span className="text-base font-medium">{hotel.price}</span> /night
                    </span>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-[#FF385C]" />
                      <span className="text-[#2c2c2c] font-medium">{hotel.rating}</span>
                      <span className="text-[#757272]">({hotel.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg">
            No listings found in {selectedCity}.
          </div>
        )}

        {/* Show more */}
        <div className="flex justify-center">
          <button className="px-6 py-2 rounded-full border border-gray-200 bg-white text-gray-700 font-medium">
            Show me more
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlaces;
