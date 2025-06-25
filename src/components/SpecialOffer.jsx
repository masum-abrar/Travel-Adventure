import { useState, useEffect ,useRef} from 'react';
import pic8 from '../assets/pic8.jpg';
import pic9 from '../assets/pic9.jpg';
import pic10 from '../assets/pic10.jpg';
import pic11 from '../assets/pic11.jpg';
import video from '../assets/vid1.mp4';

export const SpecialOffer = () => {
  const [activeOffer, setActiveOffer] = useState(0);
const [showModal, setShowModal] = useState(false);
const videoRef = useRef();
  const offers = [
    {
      image: pic8,
      title: "Weekly Flash Deals",
      subtitle: "Save up to 30% on select destinations",
      buttonText: "View Details",
      badge: "Limited Time"
    },
    {
      image: pic11,
      title: "Summer Escapes",
      subtitle: "Plan your dream vacation today",
      buttonText: "Explore Now",
      badge: "Hot Deal"
    },
    {
      image: pic10,
      title: "Exclusive Members",
      subtitle: "Get 50% off for our premium members",
      buttonText: "Join Now",
      badge: "Exclusive"
    }
  ];

  return (
    <div className="py-20 bg-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-rose-600 bg-rose-50 dark:bg-rose-900/30 rounded-full mb-4">
            Limited Time Offers
          </span>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-rose-600">Exclusive Deals</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Unlock incredible savings on your next adventure with our special promotions
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-xl dark:hover:shadow-rose-900/30 transition-all duration-500 h-[400px]"
            >
              {/* Image with gradient overlay */}
              <div className="absolute inset-0">
                <img 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  src={offer.image} 
                  alt="" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
              </div>
              
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 text-xs font-bold tracking-wider text-white uppercase bg-gradient-to-r from-rose-600 to-rose-400 rounded-full shadow-md">
                  {offer.badge}
                </span>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
                <p className="text-gray-200 mb-6">{offer.subtitle}</p>
                <button className="px-6 py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl shadow-rose-500/20">
                  {offer.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="mt-24 bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
        <div className="relative aspect-w-16 aspect-h-9">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={pic9}
          >
            <source src={video} type="video/mp4" />
          </video>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center px-4 py-6 sm:px-6 sm:py-8 backdrop-blur-sm bg-black/30 dark:bg-black/50 rounded-2xl max-w-md w-full">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                Experience Luxury Travel
              </h3>
              <button
                onClick={() => setShowModal(true)}
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium rounded-full hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl shadow-rose-500/20"
              >
                Watch Full Video
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-auto p-4">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-rose-500 transition"
              aria-label="Close Video"
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                controls
                autoPlay
                className="w-full h-full object-cover rounded-xl"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};