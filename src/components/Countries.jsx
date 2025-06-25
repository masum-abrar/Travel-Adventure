import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export const Countries = ({ country }) => {
    const { _id, image, short_description, country_Name } = country;

    return (
        <Link 
            to={`/country/${_id}`} 
            className="group relative block overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/3]"
        >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={image}
                    alt={country_Name}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative flex flex-col justify-end h-full p-6 text-white">
                <Fade cascade damping={0.05} triggerOnce>
                    {/* Country Name */}
                    <h3 className="text-3xl font-bold mb-2 drop-shadow-md">
                        {country_Name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-200 mb-5 line-clamp-3 drop-shadow-sm">
                        {short_description}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="flex justify-between items-center">
                        <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-rose-600 group-hover:border-rose-600">
                            Explore Now
                            <svg 
                                className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                        
                        {/* Rating Badge (Optional) */}
                        <span className="flex items-center px-3 py-1 bg-gradient-to-r from-rose-500 to-pink-600 text-xs font-bold rounded-full backdrop-blur-sm">
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            4.8
                        </span>
                    </div>
                </Fade>
            </div>

            {/* Hover Effect Elements */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-3xl pointer-events-none transition-all duration-500" />
            <div className="absolute top-4 right-4 w-12 h-12 bg-rose-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform group-hover:scale-100 scale-50" />
        </Link>
    );
};