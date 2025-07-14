import { FaBehance, FaFacebook, FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'
import barber from '../images/author.png.webp'
import { IoIosSearch } from 'react-icons/io'

export function Blogsection4() {
    return (
        <div className="bg-indigo-50 w-96 py-2 px-5 m-3 flex flex-col items-center">
            <div className="barber pb-4">
                <div className="input flex items-center justify-center py-6  text-white">
                    <input className="bg-blue-700 rounded-full py-2 lg:pr-24 pr-auto pl-3" placeholder='Search Posts' />
                    <IoIosSearch className=" ml-[-22px] mx-3 text-white" />
                </div>
                <div className="flex flex-col justify-center items-center leading-6 text-center text-sm pb-4">
                    <img src={barber} className="h-30 w-30 rounded-full" />
                    <h1 className='text-xl font-semibold pt-2'>Charlie Barber</h1>
                    <p>Senior Blog Writer</p>
                    <div className="socialicons flex p-2">
                        <FaFacebookF className='mx-2 hover:text-blue-600 cursor-pointer' />
                        <FaTwitter className='mx-2 hover:text-blue-600 cursor-pointer' />
                        <FaGithub className='mx-2 hover:text-blue-600 cursor-pointer' />
                        <FaBehance className='mx-2 hover:text-blue-600 cursor-pointer' />
                    </div>
                    <p>
                        Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.
                    </p>
                </div>
                <hr classNasme='text-gray-600 m-4' />
            </div>
            <div className="posts m-5">
                <button className='bg-blue-700 text-center text-white p-4 lg:w-64 w-auto'>
                    Popular Posts
                </button>
            </div>
        </div>
    )
}
