import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { IoLocationSharp, IoCalendar, IoTime, IoPeople, IoCash } from "react-icons/io5";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";

export const SpotsDetails = () => {
  const spots = useLoaderData();
  const {
    image,
    tourists_spot_name,
    country_Name,
    average_cost,
    location,
    short_description,
    travel_time,
    seasonality,
    totaVisitorsPerYear,
    user_email,
    user_name,
  } = spots;

  return (
    <>
      <Helmet>
        <title>Tours | {tourists_spot_name} Details</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Animated Gradient Header */}
        <div className="relative mb-16 group">
          <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent" />
          <h2 className="relative inline-flex mt-12 items-center justify-center text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-indigo-600 mx-auto px-6 text-center">
            <span className="absolute -left-2 top-1 text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity">✧</span>
            Spot Details
            <span className="absolute -right-2 top-1 text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">✧</span>
          </h2>
          <div className="absolute inset-x-0 bottom-1/2 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        </div>

        {/* User Cards with Glass Morphism */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-4 w-full sm:w-auto text-center border border-white/20 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center gap-2 mb-1">
              <FaUserAlt className="text-rose-500" />
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">Added By</p>
            </div>
            <p className="text-lg font-medium text-gray-800 dark:text-white">{user_name}</p>
          </div>
          <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg p-4 w-full sm:w-auto text-center border border-white/20 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center gap-2 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">Contact</p>
            </div>
            <p className="text-lg font-medium text-gray-800 dark:text-white">{user_email}</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section with Parallax Effect */}
          <div className="relative group rounded-2xl overflow-hidden shadow-2xl hover:shadow-rose-500/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
            <img 
              src={image} 
              alt={tourists_spot_name} 
              className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">{tourists_spot_name}</h1>
              <span className="inline-flex items-center mt-2 bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full font-semibold text-sm border border-white/30">
                <FaMapMarkerAlt className="mr-1" /> {country_Name}
              </span>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {/* Description */}
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {short_description}
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-rose-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <IoLocationSharp className="text-rose-500 text-xl" />
                  <h3 className="font-semibold text-gray-500 dark:text-gray-300">Location</h3>
                </div>
                <p className="font-medium text-gray-800 dark:text-white">{location}</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-indigo-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <IoCash className="text-indigo-500 text-xl" />
                  <h3 className="font-semibold text-gray-500 dark:text-gray-300">Average Cost</h3>
                </div>
                <p className="font-medium text-gray-800 dark:text-white">{average_cost}</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-teal-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <IoCalendar className="text-teal-500 text-xl" />
                  <h3 className="font-semibold text-gray-500 dark:text-gray-300">Seasonality</h3>
                </div>
                <p className="font-medium text-gray-800 dark:text-white">{seasonality}</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-amber-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <IoTime className="text-amber-500 text-xl" />
                  <h3 className="font-semibold text-gray-500 dark:text-gray-300">Travel Time</h3>
                </div>
                <p className="font-medium text-gray-800 dark:text-white">{travel_time}</p>
              </div>

              <div className="bg-white/80 dark:bg-gray-800/80 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-pink-300 transition-colors sm:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  <IoPeople className="text-pink-500 text-xl" />
                  <h3 className="font-semibold text-gray-500 dark:text-gray-300">Visitors Per Year</h3>
                </div>
                <p className="font-medium text-gray-800 dark:text-white">{totaVisitorsPerYear}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:from-rose-700 hover:to-pink-700">
                Book Now
              </button>
              <button className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all hover:bg-gray-50 dark:hover:bg-gray-700">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};