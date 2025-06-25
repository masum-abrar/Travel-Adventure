import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

export const AddTouristSpot  = () => {
    const handleSpot = e => {
        e.preventDefault();
        const form = e.target;
        const newSpot = {
            image: form.image.value,
            tourists_spot_name: form.tourists_spot_name.value,
            country_Name: form.country_name.value,
            location: form.location.value,
            short_description: form.short_description.value,
            average_cost: form.average_cost.value,
            seasonality: form.seasonality.value,
            travel_time: form.travel_time.value,
            totaVisitorsPerYear: form.totaVisitorsPerYear.value,
            user_email: form.user_email.value,
            user_name: form.user_name.value
        };

        // Show loading state
        Swal.fire({
            title: 'Processing...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        fetch('https://travel-site-black-ten.vercel.app/newspot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
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
                text: 'Tourist spot added successfully',
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
            form.reset();
        })
        .catch(error => {
            Swal.fire({
                title: 'Error!',
                text: error.message || 'Failed to add tourist spot',
                icon: 'error',
                confirmButtonColor: '#ec4899',
                background: '#1f2937',
                color: '#fff'
            });
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 mt-10">
            <Helmet>
                <title>Travel | Add Tourist Spot</title>
            </Helmet>

            <div className="container mx-auto px-4 py-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Add New <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">Tourist Spot</span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Share your favorite travel destination with our community
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-6">
                            <h2 className="text-2xl font-bold text-white">Spot Information</h2>
                        </div>
                        
                        <form onSubmit={handleSpot} className="p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Image URL</label>
                                    <input 
                                        type="url" 
                                        name="image" 
                                        placeholder="https://example.com/image.jpg" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        required 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tourist Spot Name</label>
                                    <input 
                                        type="text" 
                                        name="tourists_spot_name" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        required 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Country Name</label>
                                    <input 
                                        type="text" 
                                        name="country_name" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        required 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                                    <input 
                                        type="text" 
                                        name="location" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        required 
                                    />
                                </div>

                                <div className="space-y-2 md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Short Description</label>
                                    <textarea 
                                        name="short_description" 
                                        rows="3"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        required 
                                    ></textarea>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Average Cost ($)</label>
                                    <input 
                                        type="number" 
                                        name="average_cost" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        required 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Seasonality</label>
                                    <select 
                                        name="seasonality" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        required
                                    >
                                        <option value="">Select season</option>
                                        <option value="summer">Summer</option>
                                        <option value="winter">Winter</option>
                                        <option value="spring">Spring</option>
                                        <option value="autumn">Autumn</option>
                                        <option value="year-round">Year-round</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Travel Time</label>
                                    <input 
                                        type="text" 
                                        name="travel_time" 
                                        placeholder="e.g. 3-5 days"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        required 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Total Visitors Per Year</label>
                                    <input 
                                        type="number" 
                                        name="totaVisitorsPerYear" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        required 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                                    <input 
                                        type="email" 
                                        name="user_email" 
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                        required 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                                    <input 
                                        type="text" 
                                        name="user_name" 
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
                                Submit Tourist Spot
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>

           
        </div>
    );
};