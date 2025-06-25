import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from 'framer-motion';

export const Update = () => {
    const spots = useLoaderData();
    const { _id, image, tourists_spot_name, country_Name, average_cost, location, 
           short_description, travel_time, seasonality, totaVisitorsPerYear } = spots;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const updatedSpot = {
            image: form.image.value,
            tourists_spot_name: form.tourists_spot_name.value,
            country_Name: form.country_name.value,
            location: form.location.value,
            short_description: form.short_description.value,
            average_cost: form.average_cost.value,
            seasonality: form.seasonality.value,
            travel_time: form.travel_time.value,
            totaVisitorsPerYear: form.totaVisitorsPerYear.value
        };

        // Show loading state
        Swal.fire({
            title: 'Updating...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        fetch(`https://travel-site-black-ten.vercel.app/updatenewspot/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            Swal.fire({
                title: 'Success!',
                text: 'Tourist spot updated successfully',
                icon: 'success',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                confirmButtonColor: '#ec4899',
                background: '#1f2937',
                color: '#fff'
            });
        })
        .catch(error => {
            Swal.fire({
                title: 'Error!',
                text: error.message || 'Failed to update tourist spot',
                icon: 'error',
                confirmButtonColor: '#ec4899',
                background: '#1f2937',
                color: '#fff'
            });
        });
    };

    return (
        <div className="min-h-screen mt-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Travel | Update Tourist Spot</title>
            </Helmet>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto"
            >
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Update <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Tourist Spot</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Edit the details of {tourists_spot_name}
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-6">
                        <h2 className="text-2xl font-bold text-white">Spot Information</h2>
                    </div>
                    
                    <form onSubmit={handleUpdate} className="p-6 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Image URL */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image URL</label>
                                <input 
                                    type="url" 
                                    name="image" 
                                    defaultValue={image}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                    required 
                                />
                            </div>

                            {/* Tourist Spot Name */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tourist Spot Name</label>
                                <input 
                                    type="text" 
                                    name="tourists_spot_name" 
                                    defaultValue={tourists_spot_name}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                    required 
                                />
                            </div>

                            {/* Country Name */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Country Name</label>
                                <input 
                                    type="text" 
                                    name="country_name" 
                                    defaultValue={country_Name}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                    required 
                                />
                            </div>

                            {/* Location */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                                <input 
                                    type="text" 
                                    name="location" 
                                    defaultValue={location}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                    required 
                                />
                            </div>

                            {/* Short Description */}
                            <div className="space-y-2 md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Short Description</label>
                                <textarea 
                                    name="short_description" 
                                    rows="3"
                                    defaultValue={short_description}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                    required 
                                ></textarea>
                            </div>

                            {/* Average Cost */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Average Cost ($)</label>
                                <input 
                                    type="number" 
                                    name="average_cost" 
                                    defaultValue={average_cost}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                    required 
                                />
                            </div>

                            {/* Seasonality */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Seasonality</label>
                                <select 
                                    name="seasonality" 
                                    defaultValue={seasonality}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                    required
                                >
                                    <option value="summer">Summer</option>
                                    <option value="winter">Winter</option>
                                    <option value="spring">Spring</option>
                                    <option value="autumn">Autumn</option>
                                    <option value="year-round">Year-round</option>
                                </select>
                            </div>

                            {/* Travel Time */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Travel Time</label>
                                <input 
                                    type="text" 
                                    name="travel_time" 
                                    defaultValue={travel_time}
                                    placeholder="e.g. 3-5 days"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                    required 
                                />
                            </div>

                            {/* Total Visitors Per Year */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Total Visitors Per Year</label>
                                <input 
                                    type="number" 
                                    name="totaVisitorsPerYear" 
                                    defaultValue={totaVisitorsPerYear}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                    required 
                                />
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit" 
                            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Update Tourist Spot
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};