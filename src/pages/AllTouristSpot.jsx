import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import { SingleCard } from '../components/SingleCard';
import { Helmet } from 'react-helmet-async';
export const AllTouristSpot = () => {
    const [spots, setSpots] = useState([]);
    const [displayedSpots, setDisplayedSpots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const spotsPerPage = 6;

    useEffect(() => {
        // Fetch all spots from API
        const fetchSpots = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://travel-site-black-ten.vercel.app/newspot');
                const data = await response.json();
                setSpots(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching spots:', error);
                setLoading(false);
            }
        };

        fetchSpots();
    }, []);

    // Sort spots based on average cost
    const sortedSpots = [...spots].sort((a, b) => {
        return sortOption === 'asc' 
            ? a.average_cost - b.average_cost 
            : b.average_cost - a.average_cost;
    });

    // Handle sort change
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        setCurrentPage(1); // Reset to first page when changing sort
    };

    // Handle pagination
    useEffect(() => {
        const endIndex = currentPage * spotsPerPage;
        setDisplayedSpots(sortedSpots.slice(0, endIndex));
    }, [currentPage, sortedSpots]);

    // Load more spots
    const loadMoreSpots = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    // Check if there are more spots to load
    const hasMoreSpots = displayedSpots.length < sortedSpots.length;

    return (
        <div className="min-h-screen mt-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
            {/* ... (previous header and sort controls code) ... */}
{/* Section Header */}
  {/* Section Header */}
    <div className="text-center mb-10 max-w-4xl mx-auto">
        <span className="inline-block px-4 py-2 text-sm font-medium text-rose-600 bg-rose-100 dark:bg-rose-900/20 rounded-full mb-4">
            Explore Destinations
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Tourist Spots</span>
        </h2>
        <div className="mt-6 h-1 w-24 bg-gradient-to-r from-rose-400 to-rose-600 mx-auto rounded-full"></div>
    </div>

    {/* Sort Controls */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
        <div className="relative">
            <label htmlFor="sort" className="sr-only">Sort by</label>
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-md px-4 py-2 border border-gray-200 dark:border-gray-700">
                <svg className="w-5 h-5 text-rose-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                <select 
                    id="sort" 
                    value={sortOption} 
                    onChange={handleSortChange}
                    className="appearance-none bg-transparent text-gray-700 dark:text-gray-300 font-medium focus:outline-none focus:ring-2 focus:ring-rose-500 rounded-md px-2 py-1"
                >
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
                <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    </div>
            {/* Loading State */}
            {loading ? (
                <div className="flex flex-col items-center justify-center h-64 gap-4">
                    <BeatLoader color="#F43F5E" loading={loading} size={15} />
                    <p className="text-gray-500 dark:text-gray-400">Discovering amazing spots...</p>
                </div>
            ) : (
                <>
                    {/* Spots Grid */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
                            {displayedSpots.map(spot => (
                                <SingleCard key={spot._id} spots={spot} />
                            ))}
                        </div>
                    </div>

                    {/* View More Button */}
                    {hasMoreSpots && (
                        <div className="text-center mt-16">
                            <button 
                                className="px-8 py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl shadow-rose-500/20"
                                onClick={loadMoreSpots}
                            >
                                View More Spots
                                <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </>
            )}

          
        </div>
    );
};

export default AllTouristSpot;