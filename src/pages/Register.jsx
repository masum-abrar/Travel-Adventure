import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../providers/AuthProviders';
import Swal from 'sweetalert2';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

export const Register = () => {
  const { createUser } = useContext(AuthContext);
  
  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        showSuccessAlert();
        // You might want to update user profile with name and photo here
      })
      .catch(error => {
        showErrorAlert(error.message);
      });
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: "Registration Successful!",
      text: "Your account has been created successfully",
      icon: "success",
      showClass: {
        popup: 'animate__animated animate__fadeInDown animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp animate__faster'
      },
      background: '#1f2937',
      color: '#fff',
      confirmButtonColor: '#ec4899',
    });
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      title: "Registration Failed",
      text: message,
      icon: "error",
      confirmButtonColor: "#ec4899",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 mt-6">
      <Helmet>
        <title>Travel | Sign Up</title>
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-6 text-center">
            <h2 className="text-3xl font-bold text-white">Create Account</h2>
            <p className="text-rose-100 mt-2">Join our travel community</p>
          </div>

          <form onSubmit={handleRegister} className="p-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Sakib khan" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Profile Photo URL
                </label>
                <input 
                  type="url" 
                  name="photo" 
                  placeholder="https://example.com/photo.jpg" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="your@email.com" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <input 
                  type="password" 
                  name="password" 
                  placeholder="••••••••" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  required 
                />
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  Minimum 8 characters with at least one number
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="w-full py-3 px-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Create Account
            </motion.button>

            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <a href="/login" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">
                Sign in
              </a>
            </p>
          </form>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};