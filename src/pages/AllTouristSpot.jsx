import { useEffect, useState } from "react";

import { SingleCard } from "../components/SingleCard";
import { Footer } from "../components/Footer";

export const AllTouristSpot = () => {

    const [spots, setSpots] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/newspot')
        .then(res => res.json())
        .then((data) => {
            setSpots(data)
        });
    },[]);
    
    return (
        <div className="relative top-20">
            <h2 className="text-4xl text-center my-12 font-bold text-sky-800">All Tourists Spots</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 ml-8">
            {
                spots.map(spots =><SingleCard key={spots._id} spots={spots}></SingleCard>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};
