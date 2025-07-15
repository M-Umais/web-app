import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { LiaBarsSolid } from 'react-icons/lia'
import { TfiShoppingCart } from 'react-icons/tfi'
import { IoIosSearch } from 'react-icons/io'
import logo from '../../assets/logo.png.webp'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Single state object for all dropdowns
  const [dropdownStates, setDropdownStates] = useState({
    blog: false,
    shop: false,
    pages: false,
  });

  const handleMouseEnter = (params) => {  //params is use multiple updates in a state like we have multiple dropdowns bt if we write them seperatly they messed up so we use this approach
    setDropdownStates((prev) => ({ ...prev, [params]: true }));//this first prev gives us previous state and then the ...prev gives us that previous copy in new object and we have access to make changes in copy 
  };
  const handleMouseLeave = (params) => {
    setDropdownStates((prev) => ({ ...prev, [params]: false }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar flex lg:justify-around justify-between px-3 py-3 items-center fixed top-0 left-0 w-full z-10 bg-white">
        <div className="logo">
          <img className='' src={logo} alt='' />
        </div>
        <div className="nav-link lg:block hidden">
          <ol className='flex'>
            <Link to="/" className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out'>Home</Link>
            <div className="relative"
              onMouseEnter={() => handleMouseEnter('shop')}
              onMouseLeave={() => handleMouseLeave('shop')}>
              <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out' >Shop</li>
              {dropdownStates.shop && (
                <div className="absolute left-0 w-48 bg-white shadow-lg  transition duration-150 ease-in-out">
                  <Link to="/shopcategory" className="block p-3 hover:text-white hover:bg-blue-600 cursor-pointer transition duration-150 ease-in-out">Shop Category</Link>
                  <hr className='text-gray-100' />
                  <Link to="/productdetails" className="block p-3 hover:text-white hover:bg-blue-600 cursor-pointer transition duration-150 ease-in-out">Product Details</Link>
                  <hr className='text-gray-100' />
                  <Link to="/checkout" className="block p-3 hover:text-white hover:bg-blue-600 cursor-pointer transition duration-150 ease-in-out">Product Checkout</Link>
                  <hr className='text-gray-100' />
                  <Link to="/confirmation" className="block p-3 hover:text-white hover:bg-blue-600 cursor-pointer transition duration-150 ease-in-out">Confirmation</Link>
                  <hr className='text-gray-100' />
                  <Link to="/cart" className="block p-3 hover:text-white hover:bg-blue-600 cursor-pointer transition duration-150 ease-in-out">Shopping Cart</Link>
                </div>
              )}
            </div>
            <div className="relative"
              onMouseEnter={() => handleMouseEnter('blog')}
              onMouseLeave={() => handleMouseLeave('blog')}>
              <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out' >Blog</li>
              {dropdownStates.blog && (
                <div className="absolute left-0 w-48 bg-white shadow-lg  transition duration-150 ease-in-out">
                  <Link to="/blog" className="block p-3 hover:text-white hover:bg-blue-600 cursor-pointer transition duration-150 ease-in-out">Blog</Link>
                  <hr className='text-gray-100' />
                  <Link to="/blogdetails" className="block p-3 hover:text-white hover:bg-blue-600 cursor-pointer transition duration-150 ease-in-out">Blog Details</Link>
                </div>
              )}
            </div>
            <div className="relative"
              onMouseEnter={() => handleMouseEnter('pages')}
              onMouseLeave={() => handleMouseLeave('pages')}>
              <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out' >Pages</li>
              {dropdownStates.pages && (
                <div className="absolute left-0 w-48 bg-white shadow-lg  transition duration-150 ease-in-out">
                  <Link to="/login" className="block p-3 hover:text-white hover:bg-blue-600 cursor-pointer transition duration-150 ease-in-out">Login</Link>
                  <hr className='text-gray-100' />
                  <Link to="/register" className="block p-3 hover:text-white hover:bg-blue-600 cursor-pointer transition duration-150 ease-in-out">Register</Link>
                  <hr className='text-gray-100' />
                  <Link to="/tracking" className="block p-3 hover:text-white hover:bg-blue-600 cursor-pointer transition duration-150 ease-in-out">Tracking</Link>
                </div>
              )}
            </div>
            <Link to="/contact" className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out' >Contact</Link>
          </ol>
        </div>
        <div className="icons flex items-center lg:flex hidden">
          <div className='flex mr-3'>
            <IoIosSearch className='m-2 cursor-pointer hover:text-blue-600 transition duration-150 ease-in-out text-xl ' />
            <Link to="/cart"> <TfiShoppingCart className='m-2 cursor-pointer hover:text-blue-600 transition duration-150 ease-in-out ' /></Link>
          </div>
          <button className="lg:block hidden buy-now border border-gray-300 rounded-full w-40 hover:border-blue-600 cursor-pointer transition duration-150 ease-in-out p-3 ml-8">
            Buy Now
          </button>
        </div>
        <div className='lg:hidden block' onClick={toggleMenu}>
          {isMenuOpen ?
            <RxCross2 className='font-bold cursor-pointer transition duration-150 ease-in-out text-xl ' />
            :
            <LiaBarsSolid className='cursor-pointer transition duration-150 ease-in-out text-xl ' />
          }
        </div>
      </div>
      {/* hamburger togglemenu*/}
      {isMenuOpen &&
        <div className="nav-link m-5 py-5 ">
          <ol className='flex-col'>
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out '>Home</li>
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out '>Shop</li>
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out '>Blog</li>
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out '>Pages</li>
            <li className='m-5 hover:text-blue-600 cursor-pointer transition duration-150 ease-in-out '>Contact</li>
          </ol>
          <div className="icons flex items-center mx-3">
            <IoIosSearch className='m-2 cursor-pointer hover:text-blue-600 transition duration-150 ease-in-out text-xl ' />
            <TfiShoppingCart className='m-2 cursor-pointer hover:text-blue-600 transition duration-150 ease-in-out ' />
            <button className="border border-gray-300 rounded-full w-40 hover:border-blue-600 transition duration-150 ease-in-out p-3 mx-5 cursor-pointer">
              Buy Now
            </button>
          </div>
        </div>
      }
    </>
  )
}