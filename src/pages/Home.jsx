import React, { useEffect, useState } from 'react';
import { Banner } from '../components/Banner';
import { SpecialOffer } from '../components/SpecialOffer';
import { Tesomonial } from '../components/Tesomonial';
import { Footer } from '../components/Footer';
import { Countries } from '../components/Countries';
import { SingleCard } from '../components/SingleCard';
import { BeatLoader } from 'react-spinners'; // Import BeatLoader from react-spinners

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
      <Banner />
      <h2 className="text-4xl text-center my-12 font-bold ">Tourists Spots</h2>
      {loading ? ( // Conditionally render the spinner if loading is true
        <div className="flex justify-center items-center h-64">
          <BeatLoader color="#36D7B7" loading={loading} size={40} />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 ml-8">
          {spots.slice(0, 6).map(spot => <SingleCard key={spot._id} spots={spot} />)}
        </div>
      )}
      <SpecialOffer />
      <Tesomonial />
      <h2 className="text-4xl text-center my-12 font-bold">Countries</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 ml-8">
                {
                    country.map(country => <Countries key={country._id} country={country}></Countries>)
                }
            </div>
      <Footer />
    </div>
  );
};
