import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLocationArrow } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white pt-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10 text-sm">

        {/* LOGO + BRAND */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-600 text-transparent bg-clip-text mb-4">
            Travel
          </h2>
          <p className="text-gray-400 mb-6">Explore the world’s best destinations with premium packages and unbeatable offers.</p>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-rose-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-rose-600 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-rose-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-rose-600 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Destinations</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <p className="text-gray-400 mb-4">Get the latest travel updates and offers directly in your inbox.</p>
          <div className="flex items-center bg-white/10 rounded-full overflow-hidden focus-within:ring-2 ring-rose-500">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent px-4 py-2 w-full text-sm focus:outline-none placeholder-gray-300"
            />
            <button className="bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-2 text-white text-sm">
              <FaLocationArrow />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Travel Industries Ltd. All rights reserved.
      </div>
    </footer>
  );
};
