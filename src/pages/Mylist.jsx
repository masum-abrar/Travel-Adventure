import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../providers/AuthProviders';
import Table from "./table";
import { Footer } from "../components/Footer";
import { motion } from 'framer-motion';
import { BeatLoader } from 'react-spinners';

export const Mylist = () => {
    const { user, loading } = useContext(AuthContext) || {};
    const [place, setPlace] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        fetchPlaces();
    }, [user]);

    const fetchPlaces = () => {
        setIsRefreshing(true);
        fetch(`https://travel-site-black-ten.vercel.app/mylist/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setPlace(data);
                setIsRefreshing(false);
            })
            .catch(() => setIsRefreshing(false));
    };

    if (loading || isRefreshing) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <BeatLoader color="#ec4899" size={15} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pb-20 mt-12">
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 py-12"
            >
                <div className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Travel List</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Manage your saved tourist spots and travel plans
                    </p>
                </div>

                {place.length > 0 ? (
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left">Tourist Spot</th>
                                        <th className="px-6 py-4 text-left">Location</th>
                                        <th className="px-6 py-4 text-left">Season</th>
                                        <th className="px-6 py-4 text-left">Avg. Cost</th>
                                        <th className="px-6  py-4 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {place.map((place) => (
                                        <Table key={place._id} place={place} onUpdate={fetchPlaces} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="mx-auto w-24 h-24 bg-rose-100 dark:bg-rose-900/20 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-12 h-12 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No Spots Saved Yet</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-6">
                            You haven't added any tourist spots to your list
                        </p>
                        <button 
                            onClick={() => window.location.href = '/add-spot'}
                            className="px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full hover:from-rose-600 hover:to-pink-700 transition-all duration-300"
                        >
                            Add New Spot
                        </button>
                    </div>
                )}
            </motion.div>
           
        </div>
    );
};