import Swal from 'sweetalert2'
import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

export const Login = () => {
    const [success, setSuccess] = useState('');
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const showSuccessAlert = () => {
        Swal.fire({
            title: "Login Successful!",
            text: "You have been logged in successfully",
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

    const handleSocialSignIn = (provider) => {
        signInWithPopup(auth, provider)
            .then(result => {
                showSuccessAlert();
                setSuccess('User logged in successfully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                Swal.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error",
                    confirmButtonColor: "#ec4899",
                });
            });
    };

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {
                showSuccessAlert();
                setSuccess('User logged in successfully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                Swal.fire({
                    title: "Login Failed",
                    text: error.message,
                    icon: "error",
                    confirmButtonColor: "#ec4899",
                });
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <Helmet>
                <title>Travel | Sign In</title>
            </Helmet>

            <div className="container mx-auto px-4 py-20 mt-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-6 text-center">
                        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
                        <p className="text-rose-100 mt-2">Sign in to your account</p>
                    </div>

                    <form onSubmit={handleLogIn} className="p-8 space-y-6">
                        <div className="space-y-4">
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
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Password
                                    </label>
                                    <a href="#" className="text-xs text-rose-600 dark:text-rose-400 hover:underline">
                                        Forgot password?
                                    </a>
                                </div>
                                <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="••••••••" 
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                                    required 
                                />
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit" 
                            className="w-full py-3 px-6 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium rounded-lg hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Sign In
                        </motion.button>

                        <div className="relative flex items-center py-4">
                            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
                            <span className="flex-shrink mx-4 text-gray-500 dark:text-gray-400">or continue with</span>
                            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                type="button"
                                onClick={() => handleSocialSignIn(provider)}
                                className="flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                Google
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                type="button"
                                onClick={() => handleSocialSignIn(gitProvider)}
                                className="flex items-center justify-center py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </motion.button>
                        </div>

                        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                            Don't have an account?{' '}
                            <a href="/registration" className="text-rose-600 dark:text-rose-400 hover:underline font-medium">
                                Sign up
                            </a>
                        </p>
                    </form>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};