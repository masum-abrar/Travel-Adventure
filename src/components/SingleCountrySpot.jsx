import { Link } from 'react-router-dom';

export const SingleCountrySpot = ({ countryplace }) => {
  const {
    _id,
    image,
    country_Name,
    tourists_spot_name,
    short_description,
    average_cost,
    location,
    seasonality,
  } = countryplace;

  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group w-full max-w-sm mx-auto border border-gray-100 dark:border-gray-800">
      {/* Image with floating badges */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={tourists_spot_name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
        
        {/* Floating price tag */}
        <div className="absolute top-5 right-5 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-md flex items-center">
          <span className="text-rose-600 dark:text-rose-400 font-bold">${average_cost}</span>
          <span className="text-xs text-gray-500 ml-1">avg</span>
        </div>
        
        {/* Country flag ribbon */}
        <div className="absolute top-5 left-0 bg-gradient-to-r from-rose-600 to-rose-400 text-white px-4 py-1 shadow-lg rounded-r-full">
          <span className="text-sm font-medium">{country_Name}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title with subtle decoration */}
        <div className="mb-4 relative">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white pr-8">
            {tourists_spot_name}
          </h3>
          <div className="absolute bottom-0 left-0 w-12 h-1 bg-rose-500 rounded-full"></div>
        </div>
        
        {/* Location with icon */}
        <div className="flex items-center mb-3 text-rose-600 dark:text-rose-400">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span className="font-medium">{location}</span>
        </div>
        
        {/* Description with fade effect */}
        <p className="text-gray-600 dark:text-gray-300 mb-5 line-clamp-2 transition-all duration-300 group-hover:line-clamp-none">
          {short_description}
        </p>
        
        {/* Seasonality and rating */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {seasonality}
          </div>
          
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            ))}
            <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">4.8</span>
          </div>
        </div>
        
        {/* Beautiful View Details Button */}
        <Link to={`/details/${_id}`}>
          <button className="w-full py-3 px-6 flex items-center justify-center bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-lg hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-rose-500/40 relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              View Details
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </Link>
      </div>
      
      {/* Hover effect elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};