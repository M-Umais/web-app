import React from 'react';
import { FaEnvelope } from 'react-icons/fa'; // Added for newsletter envelope
import { IoIosSearch } from 'react-icons/io';
import { FaFacebookF, FaTwitter, FaGithub, FaBehance } from 'react-icons/fa';
import barber from '../../assets/author.png.webp';
import post1 from '../../assets/post1.jpg.webp';
import post2 from '../../assets/post2.jpg.webp';
import post3 from '../../assets/post3.jpg.webp';
import post4 from '../../assets/post4.jpg.webp';
import add from '../../assets/add.jpg.webp';

export function Blogsection4() {
  const Postcategory = [
    { post: 'Technology', category: 37 },
    { post: 'Lifestyle', category: 24 },
    { post: 'Fashion', category: 59 },
    { post: 'Art', category: 29 },
    { post: 'Food', category: 15 },
    { post: 'Architecture', category: 9 },
    { post: 'Adventure', category: 44 },
  ];
  const Cloudtags = [
    { tag: 'Technology' },
    { tag: 'Fashion' },
    { tag: 'Architecture' },
    { tag: 'Fashion' },
    { tag: 'Food' },
    { tag: 'Technology' },
    { tag: 'Lifecycle' },
    { tag: 'Food' },
    { tag: 'Art' },
    { tag: 'Adventure' },
    { tag: 'Lifecycle' },
  ];

  return (
    <div className="bg-indigo-50 max-w-96 md:max-w-100 sm:max-w-96 w-full xs:w-full h-full mx-auto p-2 md:p-4">
      <div className="barber pb-4">
        <div className="input flex items-center justify-center py-2 md:py-4 text-white w-full">
          <input
            className="bg-blue-700 rounded-full py-1 md:py-2 px-2 md:px-3 w-full md:w-auto md:pr-20 focus:outline-none text-sm md:text-base"
            placeholder="Search Posts"
          />
          <IoIosSearch className="ml-[-18px] md:ml-[-22px] mx-1 md:mx-2 text-white" />
        </div>
        <div className="flex flex-col justify-center items-center leading-4 md:leading-5 text-center text-xs md:text-sm pb-2 md:pb-4">
          <img src={barber} className="h-16 w-16 md:h-24 md:w-24 rounded-full" />
          <h1 className="text-lg md:text-xl font-semibold pt-1 md:pt-2">Charlie Barber</h1>
          <p className="text-xs md:text-sm">Senior Blog Writer</p>
          <div className="socialicons flex p-1 md:p-2">
            <FaFacebookF className="mx-1 md:mx-2 hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="mx-1 md:mx-2 hover:text-blue-600 cursor-pointer" />
            <FaGithub className="mx-1 md:mx-2 hover:text-blue-600 cursor-pointer" />
            <FaBehance className="mx-1 md:mx-2 hover:text-blue-600 cursor-pointer" />
          </div>
          <p className="text-xs md:text-sm mt-1 md:mt-2">
            Boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have its supporters and its detractors.
          </p>
        </div>
        <hr className="text-gray-300 my-2 mx-1 md:my-2 md:mx-2" />
      </div>
      <div className="posts m-1 md:m-2">
        <button className="bg-blue-700 text-center text-white p-1 md:p-2 w-full cursor-pointer text-sm md:text-base">
          Popular Posts
        </button>
        <div className="post flex flex-col md:flex-row items-center gap-1 md:gap-2 my-1 md:my-2">
          <img src={post1} className="w-12 h-12 md:w-16 md:h-16 object-cover" />
          <div className="p-1 md:p-2">
            <h1 className="font-semibold text-xs md:text-sm hover:text-blue-600 cursor-pointer transition duration-150">
              Space The Final Frontier
            </h1>
            <p className="text-xs md:text-sm">02 Hours ago</p>
          </div>
        </div>
        <div className="post flex flex-col md:flex-row items-center gap-1 md:gap-2 my-1 md:my-2">
          <img src={post2} className="w-12 h-12 md:w-16 md:h-16 object-cover" />
          <div className="p-1 md:p-2">
            <h1 className="font-semibold text-xs md:text-sm hover:text-blue-600 cursor-pointer transition duration-150">
              The Amazing Hubble
            </h1>
            <p className="text-xs md:text-sm">02 Hours ago</p>
          </div>
        </div>
        <div className="post flex flex-col md:flex-row items-center gap-1 md:gap-2 my-1 md:my-2">
          <img src={post3} className="w-12 h-12 md:w-16 md:h-16 object-cover" />
          <div className="p-1 md:p-2">
            <h1 className="font-semibold text-xs md:text-sm hover:text-blue-600 cursor-pointer transition duration-150">
              Astronomy Or Astrology
            </h1>
            <p className="text-xs md:text-sm">02 Hours ago</p>
          </div>
        </div>
        <div className="post flex flex-col md:flex-row items-center gap-1 md:gap-2 my-1 md:my-2">
          <img src={post4} className="w-12 h-12 md:w-16 md:h-16 object-cover" />
          <div className="p-1 md:p-2">
            <h1 className="font-semibold text-xs md:text-sm hover:text-blue-600 cursor-pointer transition duration-150">
              Asteroids telescope
            </h1>
            <p className="text-xs md:text-sm">02 Hours ago</p>
          </div>
        </div>
        <hr className="text-gray-300 my-2 md:my-4 mx-1 md:mx-2" />
      </div>
      <div className="add-img m-2 md:m-4 flex justify-center">
        <img src={add} className="w-full md:w-3/4 lg:w-1/2 h-auto object-cover" />
      </div>
      <hr className="text-gray-300" />
      <div className="categories">
        <button className="bg-blue-700 text-center text-white p-1 md:p-2 w-full cursor-pointer text-sm md:text-base">
          Post Categories
        </button>
        <div className="postcategory p-2 md:p-3">
          {Postcategory.map((item2, index2) => (
            <div
              className="p-1 md:p-2 flex justify-between border-b border-dashed border-gray-300 text-gray-400 hover:text-blue-600 cursor-pointer"
              key={index2}
            >
              <h1 className="text-xs md:text-sm py-1">{item2.post}</h1>
              <p className="text-xs md:text-sm py-1">{item2.category}</p>
            </div>
          ))}
        </div>
      </div>
      <hr className="text-gray-300 my-2 md:my-4" />
      <div className="newsletter py-2 md:py-3">
        <button className="my-1 md:my-2 bg-blue-700 text-center text-white p-1 md:p-2 w-full cursor-pointer text-sm md:text-base">
          Newsletter
        </button>
        <p className="text-gray-400 text-center leading-4 md:leading-6 p-2 md:p-4 text-xs md:text-sm">
          Here, I focus on a range of items and features that we use in life without giving them a second thought.
        </p>
        <form className="subscribe flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <div className="flex items-center text-xs md:text-sm bg-white text-gray-500 w-full md:w-auto">
            <FaEnvelope className="mr-[-22px] md:mr-[-28px] z-[10]" />
            <input
              type="text"
              placeholder="Enter Email"
              className="py-1 md:py-2 px-5 md:px-4 ml-2 md:ml-3 bg-white w-full"
            />
          </div>
          <button className="bg-blue-700 text-center text-white py-1 md:py-2 px-2 md:px-4 cursor-pointer text-xs md:text-sm w-full md:w-auto">
            Subscribe
          </button>
        </form>
        <p className="text-xs md:text-sm text-gray-400 text-center py-1 md:py-2">
          You can unsubscribe at anytime
        </p>
      </div>
      <hr className="text-gray-300" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 md:gap-2 my-2 md:my-4">
        {Cloudtags.map((cloud, indexs) => (
          <div key={indexs} className="text-center">
            <p className="bg-white hover:bg-blue-600 hover:text-white text-xs md:text-sm pr-1 md:pr-2 pl-1 md:pl-1 py-1 md:py-1 w-full border border-gray-300 transition duration-150 cursor-pointer">
              {cloud.tag}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}