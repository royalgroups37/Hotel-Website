'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
    FaSwimmingPool,
    FaWifi,
    FaUtensils,
    FaDumbbell,
    FaCocktail,
    FaConciergeBell,
    FaSpa,
    FaCoffee,
} from 'react-icons/fa';
import { MdPool } from 'react-icons/md';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const amenities = [
    { icon: <FaSwimmingPool />, label: 'Outdoor pool' },
    { icon: <MdPool />, label: 'Indoor pool' },
    { icon: <FaSpa />, label: 'Spa and wellness center' },
    { icon: <FaUtensils />, label: 'Restaurant' },
    { icon: <FaConciergeBell />, label: 'Room service' },
    { icon: <FaDumbbell />, label: 'Fitness center' },
    { icon: <FaCocktail />, label: 'Bar/Lounge' },
    { icon: <FaWifi />, label: 'Free Wi-Fi' },
    { icon: <FaCoffee />, label: 'Tea/Coffee machine' },
];

export default function MapWithAmenities() {
    const position = [17.4239, 78.4295]; // Banjara Hills

    return (
        <div className="w-full max-w-[1232px] mx-auto px-4 md:px-0 flex flex-col gap-6 mt-10">
            {/* Header and Button */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl md:text-2xl font-bold text-[#2c2c2c]">Location / Map</h2>
                <a
                    href="https://maps.google.com/?q=Road Number 1, Near Banjara Hills Expo, Masab Mandi, Banjara Hills, Hyderabad, Telangana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ff385c] text-white px-4 py-2 rounded-md text-sm hover:bg-[#e02e4f] transition"
                >
                    View on Google Maps
                </a>
            </div>

            {/* Map */}
            <div className="w-full h-[300px] rounded-md overflow-hidden border">
                <MapContainer
                    center={position}
                    zoom={16}
                    scrollWheelZoom={false}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>Banjara Hills, Hyderabad</Popup>
                    </Marker>
                </MapContainer>
            </div>

            {/* Address */}
            <p className="text-sm text-gray-600 leading-relaxed">
                📍 Road Number 1, Near Banjara Hills Expo, Masab Mandi, Banjara Hills, Hyderabad, Telangana
            </p>

            {/* Amenities */}
            <div className=" p-4 rounded-md w-full">
                <h3 className="text-base font-semibold mb-3 text-[#2c2c2c]">Amenities:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm text-[#2c2c2c]">
                    {amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="text-[#ff385c] text-lg">{amenity.icon}</span>
                            <span>{amenity.label}</span>
                        </div>
                    ))}
                    <span className="text-blue-600 underline cursor-pointer mt-1 col-span-2 sm:col-span-1">
                        +24 more
                    </span>
                </div>
            </div>
        </div>
    );
}
