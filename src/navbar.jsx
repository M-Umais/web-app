import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
         <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      <div className="flex items-center gap-2">
        <div className="text-blue-600 text-xl" />
        <img src="./src/assets/logo.png.webp" alt="Logo" />
      </div>

      <ul className="flex space-x-6 text-gray-700 font-medium">
        <Link to="/home">
        <li className="text-blue-600 font-semibold cursor-pointer">Home</li>
        </Link>
       <Link to="/shop">
        <li className="hover:text-blue-600 cursor-pointer">Shop</li>
        </Link>
        <Link to="/blog">
           <li className="hover:text-blue-600 cursor-pointer">Blog</li>
           </Link>
        <Link to="/page">

        <li className="hover:text-blue-600 cursor-pointer">Pages</li>
        </Link>
        <Link to="/contact">

        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </Link>
      </ul>

      <div className="flex items-center gap-6">
        <div className="text-black cursor-pointer" />

        <div className="relative cursor-pointer">
          <div className="text-black" />
        
        </div>
          <Link to="/shop">
        <button className="border border-gray-300 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition cursor-pointer">
          Buy Now
        </button>
        </Link>
      </div>
    </nav>

      
    </div>
  )
}

export default Navbar
