import { aggregateFieldEqual } from "firebase/firestore";
import { Fade } from "react-awesome-reveal";

import { Link } from "react-router-dom";


export const Countries = ({ country }) => {

    const { _id,image, short_description, country_Name } = country;


    return (
        <Link to={`/country/${_id}`}>
       
            <div className="card w-[300px] bg-base-100 shadow-xl">
                <figure><img className="w-[340px]" src={image} alt="" /></figure>
                <div className="card-body w-[340px] flex-grow">
                    <h3 className="card-title text-2xl ml-5 font-bold">{country_Name}</h3>
                    <Fade damping={0.1}>
                        <p className="w-full p-3 rounded-2xl flex-grow">{short_description}</p>
                    </Fade>
                </div>
            </div>
        </Link>

    );
};
