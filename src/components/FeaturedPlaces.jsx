import { FaHeart, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const hotels = Array(8).fill({
  title: 'Taj Mahal Hotel',
  subtitle: 'Entire cabin · 3 beds',
  location: 'Hyderabad, Telangana',
  price: '₹8,000',
  rating: 4.9,
  reviews: 122,
  discount: '-10% today',
  image: '/Image.png',
});

const FeaturedPlaces = () => (
  <section className="max-w-screen-xl mx-auto p-6">
    <div className="flex flex-col gap-12">
      {/* Heading */}
      <div>
        <h2 className="text-4xl font-semibold text-gray-800">Featured places to stay</h2>
        <p className="text-base text-gray-500 mt-1">
          Popular places to stay that Chisfis recommends for you
        </p>
      </div>

      {/* Tabs & Button */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex gap-3 flex-wrap">
          {['Hyderabad', 'New Delhi', 'Mumbai', 'Goa', 'Chennai'].map((city, idx) => (
            <button
              key={city}
              className={`px-5 py-2 rounded-full text-base font-medium ${
                idx === 0 ? 'bg-[#ff385c] text-white' : 'text-[#757272]'
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

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm"
          >
            {/* Image Section */}
            <div className="relative w-full h-[223px]">
              <img
                src={hotel.image}
                alt={hotel.title}
                className="w-full h-full object-cover"
              />
              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="w-[5px] h-[5px] bg-gray-300 rounded-full" />
                ))}
                <span className="w-[8px] h-[8px] bg-white rounded-full" />
              </div>
              {/* Discount Tag */}
              <div className="absolute top-2 left-3 px-3 py-1 text-xs text-white bg-[#ff385c] rounded-full">
                {hotel.discount}
              </div>
              {/* Heart Icon */}
              <div className="absolute top-2 right-3 bg-black/40 p-1 rounded-full">
                <FaHeart className="text-white text-sm" />
              </div>
            </div>

            {/* Info Section */}
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

      {/* Show more */}
      <div className="flex justify-center">
        <button className="px-6 py-2 rounded-full border border-gray-200 bg-white text-gray-700 font-medium">
          Show me more
        </button>
      </div>
    </div>

    
  </section>
);

export default FeaturedPlaces;
