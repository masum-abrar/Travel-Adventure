import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Table = ({ place, onUpdate }) => {
    const { _id, tourists_spot_name, location, average_cost, seasonality, image } = place;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Delete Tourist Spot?",
            text: "This action cannot be undone",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ec4899",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel",
            background: '#1f2937',
            color: '#fff',
            showClass: {
                popup: 'animate__animated animate__fadeInDown animate__faster'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp animate__faster'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://travel-site-black-ten.vercel.app/newspot/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Tourist spot removed successfully",
                            icon: "success",
                            confirmButtonColor: "#ec4899",
                            background: '#1f2937',
                            color: '#fff'
                        });
                        onUpdate(); // Refresh the list
                    }
                })
                .catch(error => {
                    Swal.fire({
                        title: "Error",
                        text: error.message,
                        icon: "error",
                        confirmButtonColor: "#ec4899",
                    });
                });
            }
        });
    };

    return (
        <motion.tr 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
        >
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full object-cover" src={image} alt={tourists_spot_name} />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {tourists_spot_name}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900 dark:text-white">{location}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    seasonality === 'summer' 
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200'
                }`}>
                    {seasonality.charAt(0).toUpperCase() + seasonality.slice(1)}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                ${average_cost}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link 
                        to={`/update/${_id}`}
                        className="text-rose-600 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-300 mr-4"
                    >
                        Edit
                    </Link>
                </motion.div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDelete(_id)}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                >
                    Delete
                </motion.button>
            </td>
        </motion.tr>
    );
};

Table.propTypes = {
    place: PropTypes.object.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default Table;