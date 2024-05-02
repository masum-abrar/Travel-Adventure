
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
        fetch(` https://tour-server-site.vercel.app/countyspots/${country}`)
            .then(res => res.json())
            .then(data => {
                setCountryplace(data)
                console.log(data);
            })
    }, [country])

    return (
        <div className="relative top-24">
            <h2 className="text-4xl text-center my-12 font-bold text-sky-800">{country}`s Tourists Spots</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 ml-24 lg:ml-8 md:ml-12 sm:ml-20">
                {
                    countryplace.map(countryplace => <SingleCountrySpot key={countryplace._id} countryplace={countryplace}></SingleCountrySpot>)
                }
            </div>
        </div>
    );
};