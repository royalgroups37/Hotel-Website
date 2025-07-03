import { FaStar, FaBath, FaBed, FaRulerCombined, FaHeart } from 'react-icons/fa';

const LocationOverview = () => {
    return (
        <div className="space-y-10 px-4 sm:px-6 md:px-8 lg:px-16 py-8 bg-white">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
                {/* Left: Property Card */}
                <div className="w-full md:w-3/5 bg-white rounded-xl shadow-md border overflow-hidden">
                  

                    {/* Map image (or real map component) */}
                    <img src="/Basemapimage.png" alt="Map" className="w-full h-56 object-cover" />
                </div>

                {/* Right: Review Section */}
                <div className="w-full md:w-2/5 flex flex-col gap-4 p-4 border rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800">Location area review</h3>
                    <p className="text-gray-500 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                        velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <button className="bg-[#ff385c] hover:bg-[#e52e4d] text-white text-sm px-4 py-2 rounded-full w-fit">
                        Learn more
                    </button>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className=" mx-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-6 items-center">
                {/* Text block */}
                <div className="w-full lg:w-1/3 space-y-6">
                    <div className="space-y-3">
                        <p className="text-3xl sm:text-4xl font-semibold text-[#2c2c2c]">Join our newsletter 🎉</p>
                        <p className="text-base text-[#757272]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                            interdum.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-emerald-100 text-emerald-800 px-2.5 py-1 text-xs rounded-md">01</div>
                            <p className="text-base font-medium text-[#2c2c2c]">Get more discount</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-100 text-[#ff385c] px-2.5 py-1 text-xs rounded-md">02</div>
                            <p className="text-base font-medium text-[#2c2c2c]">Get premium travel magazine</p>
                        </div>
                    </div>

                    {/* Input */}
                    <div className="relative w-full mt-4">
                        <input
                            type="email"
                            placeholder="Example@gmail.com"
                            className="w-full h-12 pl-5 pr-14 rounded-full border border-gray-300 focus:outline-none text-gray-500"
                        />
                        <button className="absolute right-1 top-1.5 bg-[#ff385c] hover:bg-[#e52e4d] text-white px-4 py-2 rounded-full text-sm">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Image */}
                <img
                    src="/Illustrator.png"
                    alt="Newsletter Visual"
                    className="w-full lg:w-[45%] h-[250px] lg:h-[350px] object-cover"
                />
            </div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-6 items-center mt-10">
  {/* Text block */}
  <div className="w-full lg:w-1/4 space-y-6">
    <div className="space-y-3">
      <p className="text-3xl sm:text-4xl font-semibold text-[#2c2c2c]">👋 About us</p>
      <p className="text-base text-[#757272]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
    </div>
  </div>

  {/* Image row - scrollable on mobile */}
  <div className="w-full lg:w-2/4 overflow-x-auto flex justify-start lg:justify-end items-center flex-grow relative gap-2.5 rounded-xl">
    <img
      src="rectangle-4.png"
      className="flex-grow-0 flex-shrink-0 w-[120px] h-[227px] rounded-3xl object-cover"
      style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)" }}
    />
    <img
      src="rectangle-11.png"
      className="flex-grow-0 flex-shrink-0 w-[140px] h-[277px] rounded-3xl object-cover"
      style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)" }}
    />
    <img
      src="rectangle-8.png"
      className="flex-grow-0 flex-shrink-0 w-[165px] h-[319px] rounded-3xl object-cover"
      style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)" }}
    />
    <img
      src="rectangle-7.png"
      className="flex-grow-0 flex-shrink-0 w-[140px] h-[277px] rounded-3xl object-cover"
      style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)" }}
    />
    <img
      src="rectangle-12.png"
      className="flex-grow-0 flex-shrink-0 w-[120px] h-[227px] rounded-3xl object-cover"
      style={{ boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -2px rgba(0,0,0,0.05)" }}
    />
  </div>
</div>

        </div>
    );
};

export default LocationOverview;
