import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FeaturedPlaces from '../../components/FeaturedPlaces';
import BrowseTypes from '../../components/BrowseTypes';
import LocationOverview from '../../components/LocationOverview';

import CityCarousel from '../../components/CityCarousel';

import Image from 'next/image';
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';
import { HiArrowSmRight } from 'react-icons/hi';

export default function Home() {
  const promoData = [
    {
      title: 'Stay 10 nights, get 1 reward night',
      cta: 'Search stays',
      image: '/image1.png',
    },
    {
      title: 'Plans change. Book a stay with flexibility to cancel at any time',
      cta: 'Book now',
      image: '/image2.png',
    },
    {
      title: 'Compare hotels side-by-side to find the right one for you',
      cta: 'Compare hotels',
      image: '/image3.png',
    },
  ];
  return (
    <div className="min-h-screen tracking-wide bg-[#fdfbf7]" id="homeScreen">
      <Header />
      <div >
        <img
          src="/Frame36.jpg"
          alt="Promotional banner"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      {/* Promo Section */}
      <div className="w-full px-6 py-10 bg-white">
        <div className="flex flex-wrap justify-center gap-6">
          {promoData.map((promo, index) => (
            <div
              key={index}
              className="flex items-center bg-[#f9f9f9] rounded-xl overflow-hidden w-[370px] h-[120px] shadow-sm"
            >
              {/* Text Content */}
              <div className="flex flex-col justify-between h-full p-4 w-[60%]">
                <p className="text-sm font-medium text-[#2c2c2c]">{promo.title}</p>
                <div className="flex items-center gap-1 text-sm text-[#2c2c2c] mt-2">
                  <span className="font-medium">{promo.cta}</span>
                  <HiArrowSmRight size={16} />
                </div>
              </div>

              {/* Image */}
              <div className="relative w-[40%] h-full">
                <Image
                  src={promo.image}
                  alt={`Promo ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Properties Section */}



      <CityCarousel />

      <FeaturedPlaces />
      <BrowseTypes />
      <LocationOverview />

      <Footer />
    </div>
  );
}
