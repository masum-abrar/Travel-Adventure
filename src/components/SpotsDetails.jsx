import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


export const SpotsDetails = () => {
    const spots = useLoaderData();
    //    console.log(spots);
        const { image, tourists_spot_name, country_Name, average_cost, location, short_description, travel_time, seasonality, totaVisitorsPerYear, user_email,user_name } = spots;
    
    
        return (
            <>
          
                <Helmet>
                    <title> Tours | Place Details</title>
                </Helmet>
    
                <h2 className="text-4xl font-bold text-center pt-12 pb-5">Property Details</h2>
                <div className="flex justify-evenly pt-2">
                    <p className="text-xl"><span className="font-bold">User Email: </span>  {user_email}</p>
                    <p className="text-xl"><span className="font-bold">User Name: </span>  {user_name}</p>
                </div>
                <div className="m-3 p-2 flex justify-center items-center">
                    <div className="w-[40%] mx-auto">
                        <img className="w-fit h-280px lg:h-[380px] md:h-[350px] sm:h-[300px]" src={image} alt="" />
                    </div>
                    <div className="w-[60%] px-24">
                        <h1 className="py-5 font-bold text-2xl sm:text-4xl">{tourists_spot_name} </h1>
                        <p className="font-medium w-fit bg-[#2e7e8a] text-white rounded-xl px-2 py-1 text-base sm:text-xl">{country_Name}</p>
                        <p className="py-3 font-medium text-base sm:text-xl"><span className="font-bold">Location:  </span> {location} </p>
                        
                        <hr />
                        <p className="pb-3 font-medium text-base sm:text-xl"><span className="font-bold py-3">Description: </span> {short_description}</p>
                        <hr />
                        <div className="flex gap-8">
                            <div>
                                <p className="gap-5 py-3"><span className="text-gray-500">Average Cost: </span></p>
                                <p className="gap-5 py-3"><span className="text-gray-500">Seasonality: </span> </p>
                                <p className="gap-5 py-3"><span className="text-gray-500">Travel Time: </span></p>
                                <p className="gap-5 py-3"><span className="text-gray-500">Total Visitors: </span></p>
                            </div>
                            <div className="text-bold">
                                <p className="gap-5 py-4 sm:py-3">{average_cost}</p>
                                <p className="gap-5 py-4 sm:py-3">{seasonality}</p>
                                <p className="gap-5 py-4 sm:py-3">{travel_time}</p>
                                <p className="gap-5 py-4 sm:py-3">{totaVisitorsPerYear}</p>
    
                            </div>
                        </div>
    
                    </div>
                </div>
            </>
        );
}
