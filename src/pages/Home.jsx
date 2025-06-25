import React, { useEffect, useState } from 'react';
import { Banner } from '../components/Banner';
import { SpecialOffer } from '../components/SpecialOffer';

import { Footer } from '../components/Footer';
import { Countries } from '../components/Countries';
import { SingleCard } from '../components/SingleCard';
import { Navbar } from '../components/Navbar';
import { BeatLoader } from 'react-spinners'; // Import BeatLoader from react-spinners
import { Testimonial } from '../components/Tesomonial';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState([])

  useEffect(() => {
    fetch('https://travel-site-black-ten.vercel.app/newspot')
      .then(res => res.json())
      .then(data => {
        setSpots(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(' https://travel-site-black-ten.vercel.app/country')
    .then(res => res.json())
    .then(data => {
      setCountry(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });

}, [])


  return (
  <div>
  {/* Navbar will be fixed normally at top */}
  <Navbar />

  {/* Banner comes after Navbar */}
  <Banner />

 <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white ">
  {/* Modern Section Header */}
  <div className="text-center mb-16 max-w-4xl mx-auto">
    <span className="inline-block px-4 py-2 text-sm font-medium text-rose-600 bg-rose-50  rounded-full mb-4">
      Must-Visit Locations
    </span>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 ">
      Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">Tourist Spots</span>
    </h2>
    <div className="mt-6 h-1 w-24 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto rounded-full"></div>
  </div>

  {/* Loading State */}
  {loading ? (
    <div className="flex flex-col items-center justify-center h-64 gap-4">
      <BeatLoader 
        color="#F43F5E" 
        loading={loading} 
        size={15}
        cssOverride={{
          display: 'block',
          margin: '0 auto',
        }}
      />
      <p className="text-gray-500 ">Discovering amazing spots...</p>
    </div>
  ) : (
    <>
      {/* Enhanced Grid Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
          {spots.slice(0, 6).map((spot) => (
            <SingleCard key={spot._id} spots={spot} />
          ))}
        </div>
      </div>

      {/* View More Button (Conditional) */}
      {spots.length > 6 && (
        <div className="text-center mt-16">
          <Link to='/alltouristspot'>
<button 
            className="px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl shadow-rose-500/20"
           
          >
            View More Spots
             <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
          </button>
          </Link>
        </div>
      )}
    </>
  )}
</div>

  <SpecialOffer />
  <Testimonial/>  

 <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white ">
  {/* Modern Section Header */}
  <div className="text-center mb-16 max-w-4xl mx-auto">
    <span className="inline-block px-4 py-2 text-sm font-medium text-rose-600 bg-rose-50  rounded-full mb-4">
      Explore The World
    </span>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 ">
      Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">Beautiful Countries</span>
    </h2>
    <div className="mt-6 h-1 w-24 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto rounded-full"></div>
  </div>

  {/* Enhanced Grid Layout */}
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
      {country.map((country) => (
        <Countries key={country._id} country={country} />
      ))}
    </div>
  </div>

  {/* Optional View More Button */}
  <div className="text-center mt-16">
   <Link to='/alltouristspot'> 
    <button className="px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl shadow-rose-500/20"
    
          >
    
      View All Destinations
      <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
   </Link>
  </div>
</div>

 
</div>

  );
};
