import { FaHeart, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const categories = [
    {
        name: "Hotels",
        image: "/45450075.jpeg.png",
    },
    {
        name: "Villas",
        image: "/45450090.jpeg.png",
    },
    {
        name: "Resorts",
        image: "/595548591.jpeg.png",
    },
    {
        name: "Guest Houses",
        image: "/595549020.jpeg.png",
    },
    {
        name: "Cottages",
        image: "/595549239.jpeg.png",
    },
    {
        name: "Apartments",
        image: "/595550059.jpeg.png",
    },
];


const BrowseTypes = () => (
    <>
      <section className="max-w-screen-xl mx-auto ">
    <p className="text-[22.3125px] font-semibold text-left text-[#2c2c2c] mb-4">
      Browse by property type
    </p>

    <div className="flex flex-wrap gap-6">
      {categories.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-start w-[279px] pr-4"
        >
          <div className="flex flex-col justify-center items-start w-full h-[246.39px]">
            <div className="flex flex-col justify-start items-start w-full gap-1">
              <div className="w-[263px] h-[210.39px] relative">
                <div className="w-[263px] h-[210.39px] overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="pt-2">
                <p className="text-[14.625px] font-bold text-left text-[#2c2c2c]">
                  {item.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* ✅ Responsive Full-Width Image */}
    
  </section>
  <div className="mt-8">
      <img
        src="/Frame50.jpg"
        alt="Promotional banner"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
    </>

);


export default BrowseTypes;
