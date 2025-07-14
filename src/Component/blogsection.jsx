import React from 'react'
import img1 from '../images/img1.webp'
import img2 from '../images/img2.webp'
import img3 from '../images/img3.webp'
import { CiUser } from 'react-icons/ci'
import { RxCalendar } from 'react-icons/rx'
import { VscEye } from 'react-icons/vsc'
import { TbMessageCircle } from 'react-icons/tb'

export default function Blogsection1() {
    const imageData = [
        {
            img: img1,
            title: " Social Life",
            para: "Enjoy your social life together",
        },
        {
            img: img2,
            title: "Politics",
            para: "Be a part of Politics",
        },
        {
            img: img3,
            title: "Food",
            para: "Let the food be finished"
        }
    ]
    return (
        <>
            {/* Blog heading */}
            <div className="Blog-heading w-full h-100 flex flex-col justify-center items-center bg-gray-100 leading-8 font-[Oswald]">
                <h1 className='text-4xl font-bold'>Our Blog</h1>
                <p className='text-md'>Home-Blog</p>
            </div>
            {/* images grid */}
            <div className="images grid grid-cols-3 gap-3 justify-center m-3 p-24">
                {imageData.map((item, index) => (
                    <div className='relative' key={index}>
                        <img src={item.img} className='relative' />
                        <div className="img-text text-white leading-10 absolute top-5 bottom-5 right-5 left-5 flex flex-col justify-center items-center bg-zinc-900/70 bg-opacity-50 hover:bg-blue-600/70 transition duration-150 cursor-pointer  ">
                            <h1 className='text-xl font-bold uppercase py-3'>{item.title}</h1>
                            <hr className='w-50' />
                            <p className='px-3'>{item.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export function Blogsection2() {
    return (
        <div>
            <div className="blogsection2">
                <p className='flex mx-4 pt-8'>Food,<span className='text-blue-600'>Technology</span>, Politics, Lifestyle</p>
                <div className='flex justify-center items-center cursor-pointer'>
                    <p className='p-2 hover:text-blue-600'>Mark weins</p>
                    <CiUser />
                </div>
                <div className='flex justify-center items-center cursor-pointer'>
                    <p className='p-2 hover:text-blue-600'>12 Dec,2017</p>
                    <RxCalendar />
                </div>
                <div className='flex justify-center items-center cursor-pointer'>
                    <p className='p-2 hover:text-blue-600'>1.2 M Views</p>
                    <VscEye />
                </div>
                <div className='flex justify-center items-center cursor-pointer'>
                    <p className='p-2 hover:text-blue-600'>06 Comments</p>
                    <TbMessageCircle />
                </div>
            </div>
        </div>
    )
}

export function Blogsection3({ src, heading, descrp, button }) {
    return (
        <div className='flex p-5 '>
            <Blogsection2 />
            <div className="blogsection3">
                <img src={src} className='w-[550px]' />
                <div className='py-3 w-[400px]'>
                    <h1 className='text-2xl font-bold leading-10 my-2'>{heading}</h1>
                    <p className='text-md my-2'>{descrp}</p>
                    <button className='bg-gray-100 px-4 py-3 rounded-md my-2 transition duration-150 cursor-pointer hover:text-white hover:bg-blue-600'>{button}</button>
                </div>
            </div>
        </div>
    )
}
