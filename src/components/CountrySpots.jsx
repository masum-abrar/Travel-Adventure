
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { SingleCountrySpot } from "./SingleCountrySpot";

export const CountrySpots = () => {
    const countries = useLoaderData();
    var country = countries.country_Name;
    //  console.log(country);
    const [countryplace, setCountryplace] = useState([]);
    //  console.log(countryplace);

    useEffect(() => {
        fetch(`https://travel-site-black-ten.vercel.app/countyspots/${country}`)
            .then(res => res.json())
            .then(data => {
                setCountryplace(data)
                console.log(data);
            })
    }, [country])

    return (
      <div className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white dark:from-gray-900 dark:to-gray-800">
  {/* Modern Section Header */}
 <div className="text-center mb-16 max-w-4xl mx-auto mt-10">
  {/* Badge with rose theme */}
  <span className="inline-block px-4 py-2 text-sm font-medium text-rose-600 bg-rose-100 dark:bg-rose-900/20 rounded-full mb-4 shadow-sm">
    Explore {country}
  </span>
  
  {/* Main title with rose-pink gradient */}
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-500 dark:text-white">
    {country}'s <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600 animate-gradient">Top Destinations</span>
  </h2>
  
  {/* Animated gradient underline */}
  <div className="mt-6 h-1.5 w-28 bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 mx-auto rounded-full animate-pulse-slow"></div>
</div>

  {/* Grid Layout */}
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
      {countryplace.map(countryplace => (
        <SingleCountrySpot key={countryplace._id} countryplace={countryplace} />
      ))}
    </div>
  </div>

  {/* View More Button (if needed) */}
  {countryplace.length > 6 && (
    <div className="text-center mt-16">
      <button className="px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-medium rounded-full hover:from-sky-600 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl shadow-sky-500/20">
        View More Spots
        <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  )}
</div>
    );
};