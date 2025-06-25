import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import pic20 from '../assets/pic20.jpg';
import pic7 from '../assets/pic8.jpg';
import pic30 from '../assets/pic33.jpg';
import { Navbar } from './Navbar';
import { motion } from 'framer-motion';

export const Banner = () => {
    
  return (
<div className="w-full relative">
  <div className="carousel w-full h-[500px] xl:h-[700px] relative overflow-hidden rounded-2xl shadow-2xl">
    {[pic30, pic6, pic20].map((img, index) => (
      <div 
        key={index} 
        id={`slide${index + 1}`} 
        className="carousel-item relative w-full h-full"
      >
        {/* Background image with parallax effect */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={img} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
            alt={`Travel destination ${index + 1}`}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>

        {/* Content with staggered animations */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif tracking-tight"
          >
            TRAVEL ADVENTURE
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-xl lg:text-2xl max-w-2xl mb-8 font-light"
          >
            Discover breathtaking destinations with us - Where every journey begins with wonder.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base tracking-wider">
                EXPLORE NOW
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute z-30 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a 
            href={`#slide${index === 0 ? 3 : index}`} 
            className="btn btn-circle glass hover:bg-rose-600 transition-colors duration-300"
          >
            ❮
          </a>
          <a 
            href={`#slide${(index + 2 > 3) ? 1 : index + 2}`} 
            className="btn btn-circle glass hover:bg-rose-600 transition-colors duration-300"
          >
            ❯
          </a>
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex justify-center w-full bottom-8 gap-2">
          {[1, 2, 3].map((dotIndex) => (
            <a 
              key={dotIndex}
              href={`#slide${dotIndex}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index + 1 === dotIndex ? 'bg-rose-500 w-6' : 'bg-white/50'}`}
            >
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
  )
}
