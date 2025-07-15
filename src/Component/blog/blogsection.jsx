import React from 'react';
import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import { CiUser } from 'react-icons/ci';
import { RxCalendar } from 'react-icons/rx';
import { VscEye } from 'react-icons/vsc';
import { TbMessageCircle } from 'react-icons/tb';


export default function Blogsection1() {
    const imageData = [
        { img: img1, title: 'Social Life', para: 'Enjoy your social life together' },
        { img: img2, title: 'Politics', para: 'Be a part of Politics' },
        { img: img3, title: 'Food', para: 'Let the food be finished' },
    ];
    return (
        <>
            {/* Blog heading */}
            <div className="Blog-heading w-auto h-[90vh] flex flex-col justify-center items-center bg-gray-100 leading-8 font-[Oswald] text-center">
                <h1 className="text-4xl font-bold md:text-5xl">Our Blog</h1>
                <p className="text-md md:text-lg">Home - Blog</p>
            </div>
            {/* Images grid */}
            <div className="images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center mx-auto p-4 md:p-6 lg:p-24">
                {imageData.map((item, index) => (
                    <div className="relative group" key={index}>
                        <img src={item.img} className="w-full h-auto object-cover" />
                        <div className="img-text text-white leading-6 absolute inset-5 flex flex-col justify-center items-center bg-zinc-900/70 bg-opacity-50 group-hover:bg-blue-600/70 transition duration-150 cursor-pointer">
                            <h1 className="text-xl font-bold uppercase py-2 md:text-2xl">{item.title}</h1>
                            <hr className="w-16 border-t-2 border-white my-2" />
                            <p className="px-2 text-center md:text-base">{item.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export function Blogsection2() {
    return (
        <div className="blogsection2 text-center md:text-left">
            <p className="flex justify-center mx-4 pt-4 text-sm md:text-base">
                Food, <span className="text-blue-600">Technology</span>, Politics, Lifestyle
            </p>
            <div className="flex justify-center items-center cursor-pointer my-1 md:my-2">
                <p className="p-1 hover:text-blue-600 text-sm md:text-base">Mark Weins</p>
                <CiUser className="ml-1" />
            </div>
            <div className="flex justify-center items-center cursor-pointer my-1 md:my-2">
                <p className="p-1 hover:text-blue-600 text-sm md:text-base">12 Dec, 2017</p>
                <RxCalendar className="ml-1" />
            </div>
            <div className="flex justify-center items-center cursor-pointer my-1 md:my-2">
                <p className="p-1 hover:text-blue-600 text-sm md:text-base">1.2M Views</p>
                <VscEye className="ml-1" />
            </div>
            <div className="flex justify-center items-center cursor-pointer my-1 md:my-2">
                <p className="p-1 hover:text-blue-600 text-sm md:text-base">06 Comments</p>
                <TbMessageCircle className="ml-1" />
            </div>
        </div>
    );
}

export function Blogsection3({ src, heading, descrp, button }) {
    return (
        <div className="flex flex-col md:flex-row p-4 md:p-6 gap-4">
            <Blogsection2 />
            <div className="blogsection3 flex-1">
                <img src={src} className="w-full md:w-[550px] h-auto object-cover rounded-lg" />
                <div className="py-2 md:py-3 w-full md:w-[400px]">
                    <h1 className="text-2xl font-bold leading-7 md:leading-10 my-2">{heading}</h1>
                    <p className="text-md my-2">{descrp}</p>
                    <button className="bg-gray-100 px-4 py-2 md:px-4 md:py-3 rounded-md my-2 transition duration-150 cursor-pointer hover:text-white hover:bg-blue-600 w-full md:w-auto">
                        {button}
                    </button>
                </div>
            </div>
        </div>
    );
}
