import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn, MdAccessTime, MdAttachMoney, MdWbSunny } from 'react-icons/md';

export const SingleCard = ({ spots }) => {
  const { _id, image, tourists_spot_name, average_cost, location, travel_time, seasonality } = spots;

  return (
    <div className="relative w-[350px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-white via-gray-100 to-white border border-gray-200">
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={image}
          alt={tourists_spot_name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-600 to-rose-400 text-white px-3 py-1 rounded-full text-xs uppercase tracking-wide shadow-md">
          Hot Spot
        </div>

        {/* Overlay button on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
          <Link to={`/details/${_id}`}>
            <button className="px-5 py-2 bg-white text-rose-600 font-bold rounded-full shadow-md hover:bg-rose-600 hover:text-white transition">
              View Details
            </button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3 text-gray-800">
        <h3 className="text-xl font-extrabold text-rose-600 tracking-tight">{tourists_spot_name}</h3>

        <div className="flex items-center gap-2 text-sm">
          <MdLocationOn className="text-rose-500" size={18} />
          <span>{location}</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <MdWbSunny className="text-yellow-500" size={18} />
            <span>{seasonality}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MdAttachMoney className="text-green-500" size={18} />
            <span>{average_cost}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 col-span-2">
            <MdAccessTime className="text-blue-500" size={18} />
            <span>Travel Time: {travel_time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
