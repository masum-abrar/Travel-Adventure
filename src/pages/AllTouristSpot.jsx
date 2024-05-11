import React, { useEffect, useState } from "react";
import { SingleCard } from "../components/SingleCard";
import { Footer } from "../components/Footer";
import { BeatLoader } from "react-spinners";

export const AllTouristSpot = () => {
    const [spots, setSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortedSpots, setSortedSpots] = useState([]);
    const [sortOption, setSortOption] = useState("default");

    useEffect(() => {
        fetch('https://travel-site-black-ten.vercel.app/newspot')
        .then(res => res.json())
        .then((data) => {
            setSpots(data);
            setLoading(false);
            setSortedSpots(data); 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    }, []);

    
    const handleSortChange = (e) => {
        const option = e.target.value;
        setSortOption(option);

        const sorted = [...spots];
        sorted.sort((a, b) => {
            if (option === "asc") {
                return a.average_cost - b.average_cost;
            } else {
                return b.average_cost - a.average_cost;
            }
        });

        setSortedSpots(sorted);
    };
    
    return (
        <div className="relative top-20">
            <h2 className="text-4xl text-center my-12 font-bold text-sky-800">All Tourists Spots</h2>
            <div className="flex justify-center my-4 ">
                <label htmlFor="sort" className="bg-rose-600 p-3 rounded-xl text-white">Sort by:</label>
                <select  className="bg-rose-600 p-3 rounded-xl text-white" id="sort" value={sortOption} onChange={handleSortChange}>
                    <option value="asc">Average Cost Low to High</option>
                    <option value="desc">Average Cost High to Low</option>
                </select>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <BeatLoader color="#36D7B7" loading={loading} size={60} />
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 ml-8">
                    {sortedSpots.map(spot => <SingleCard key={spot._id} spots={spot}></SingleCard>)}
                </div>
            )}
            <Footer />
        </div>
    );
};
