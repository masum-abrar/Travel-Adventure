import React, { useEffect, useState } from 'react'
import { Banner } from '../components/Banner'
import { SpecialOffer } from '../components/SpecialOffer'
import { Tesomonial } from '../components/Tesomonial'
import { Footer } from '../components/Footer'
import { Countries } from '../components/Countries'
import { SingleCard } from '../components/SingleCard'




export const Home = () => {
  const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/newspot')
        .then(res => res.json())
        .then(data => setSpots(data));
    },[]);
  return (
    <div>
        <Banner></Banner>
        <h2 className="text-4xl text-center my-12 font-bold text-sky-800">Tourists Spots</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 ml-8">
                {
                    spots.slice(0,6).map(spots => <SingleCard key={spots._id} spots={spots}></SingleCard>)
                }

            </div>
        <SpecialOffer></SpecialOffer>
     
        <Tesomonial></Tesomonial>
        <Countries></Countries>
        <Footer></Footer>
    </div>
  )
}
