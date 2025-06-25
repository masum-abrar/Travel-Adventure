import React from 'react';
import {Link} from 'react-router-dom';
export const Testimonial = () => {
  const testimonials = [
    {
      quote: "Highly recommended for anyone looking for a better Tour Service. The attention to detail was exceptional!",
      name: "Md. Abrar",
      role: "Travel Enthusiast",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: "One of the best tour services you will ever experience. Our guide made the trip unforgettable!",
      name: "Ms. Roshni",
      role: "Adventure Seeker",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
      quote: "All services were excellent. The guides were knowledgeable and went above and beyond to help us.",
      name: "Sabila Animi",
      role: "Cultural Explorer",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100&q=80"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-rose-600 bg-rose-50 dark:bg-rose-900/30 rounded-full mb-4">
            Client Testimonials
          </span>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">Customers Say</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Hear from travelers who've experienced our exceptional service
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-xl dark:hover:shadow-rose-900/30 transition-all duration-500"
            >
              {/* Quote Card */}
              <div className="relative h-full p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-16 h-16 -mr-4 -mt-4 bg-rose-500/10 dark:bg-rose-500/20 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 -ml-4 -mb-4 bg-rose-500/10 dark:bg-rose-500/20 rounded-full"></div>
                
                {/* Quote icon */}
                <svg 
                  className="w-10 h-10 mb-6 text-rose-500/30 dark:text-rose-500/40" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                {/* Testimonial text */}
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  {testimonial.quote}
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-rose-500/20 dark:border-rose-500/30"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-rose-600 dark:text-rose-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              {/* Hover effect border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-rose-500/20 dark:group-hover:border-rose-500/30 rounded-3xl pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to experience it yourself?
          </h3>
         <Link to='alltouristspot'>
		  <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl shadow-rose-500/20">
            Book Your Adventure Now
          </button>
		 </Link>
        </div>
      </div>
    </div>
  );
};