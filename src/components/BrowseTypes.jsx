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
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-2xl font-semibold text-[#2c2c2c] mb-6">
        Browse by property type
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div key={index} className="flex flex-col w-full">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="pt-3 text-sm font-bold text-[#2c2c2c] text-left">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Responsive Full-Width Banner */}
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <img
        src="/Frame50.jpg"
        alt="Promotional banner"
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  </>
);

export default BrowseTypes;



