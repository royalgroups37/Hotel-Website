import { MapPin, CalendarDays, Search } from "lucide-react";
import StayListings from '../../components/StayListings';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Stays() {
    return (
        <div className="min-h-screen bg-white tracking-wide">
            <Header />


            <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                {/* LEFT: Text section */}
                <div className="flex flex-col gap-8 w-full lg:w-[548px]">
                    <p className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[68px] font-semibold text-gray-900 leading-tight">
                        Hyderabad,<br />Telangana
                    </p>
                    <div className="flex items-center gap-2.5 text-gray-600">
                        <span className="text-2xl">📍</span>
                        <span className="text-xl sm:text-2xl">Jubblie Hills · 112 properties</span>
                    </div>
                </div>

                {/* RIGHT: Images section */}
                <div className="w-full lg:w-[641px] relative flex justify-center lg:justify-end">
                    <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                        {/* Left image column */}
                        <div className="flex flex-col gap-[23px] w-full sm:w-1/2 lg:w-[309px]">
                            <img
                                src="rectangle-31.png"
                                alt="Stay 1"
                                className="w-full h-[210px] object-cover rounded-2xl"
                            />
                            <img
                                src="rectangle-32.png"
                                alt="Stay 2"
                                className="w-full h-[318px] object-cover rounded-2xl"
                            />
                        </div>

                        {/* Right tall image */}
                        <div className="w-full sm:w-1/2 lg:w-[309px]">
                            <img
                                src="rectangle-30.png"
                                alt="Stay 3"
                                className="w-full h-[520px] object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-4 py-6 flex justify-center bg-[#fdfbf7]">
                <div className="w-full max-w-[1240px] flex flex-col gap-4">
                    <div
                        className="w-full bg-white/80 backdrop-blur-3xl rounded-full shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),_0px_10px_10px_-5px_rgba(0,0,0,0.04)] px-2 sm:px-4 py-3"
                    >
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                            {/* LEFT INPUTS */}
                            <div className="flex flex-col sm:flex-row items-center justify-between w-full lg:w-auto gap-4 flex-grow">
                                {/* Location */}
                                <div className="flex items-start gap-3 px-4 py-2 w-full sm:w-[300px]">
                                    <MapPin className="text-gray-400 w-7 h-7" />
                                    <div>
                                        <p className="text-xl font-semibold text-gray-900">Location</p>
                                        <p className="text-sm text-gray-400">Where you stay?</p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="hidden sm:block w-px h-11 bg-gray-200" />

                                {/* Check-in */}
                                <div className="flex items-start gap-3 px-4 py-2 w-full sm:w-[250px]">
                                    <CalendarDays className="text-gray-400 w-7 h-7" />
                                    <div>
                                        <p className="text-xl font-semibold text-gray-900">Check In</p>
                                        <p className="text-sm text-gray-400">Add date</p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="hidden sm:block w-px h-11 bg-gray-200" />

                                {/* Check-out */}
                                <div className="flex items-start gap-3 px-4 py-2 w-full sm:w-[250px]">
                                    <CalendarDays className="text-gray-400 w-7 h-7" />
                                    <div>
                                        <p className="text-xl font-semibold text-gray-900">Check out</p>
                                        <p className="text-sm text-gray-400">Add date</p>
                                    </div>
                                </div>
                            </div>

                            {/* SEARCH BUTTON */}
                            <button className="bg-[#FF385C] p-4 rounded-full text-white hover:bg-[#e52e4e] transition">
                                <Search className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <StayListings />

            <Footer />

        </div>
    );
}
