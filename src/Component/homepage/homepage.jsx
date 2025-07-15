import React from 'react'
import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div className='bg-white '>
            <div className="h-screen bg-gray-100 flex items-center pl-30 pt-10 mb-2 ">
                <img src='./src/assets/hero-banner.png.webp' className='h-150'></img>
                <div className='px-20 pr-60'>
                    <h2 className='text-2xl pb-5'>Shop is fun</h2>

                    <h1 className='text-5xl font-bold'>BROWSE OUR</h1>
                    <h1 className='text-5xl font-bold pb-10 '>PREMIUM PRODUCTS</h1>
                    <p className='pb-10'>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
                    <Link to="/shop">
                        <button className='border px-6 py-3 rounded-4xl bg-blue-800 text-white cursor-pointer'>Browse Now</button>
                    </Link>
                </div>
            </div>
            <div className='flex'>
                <div>
                    <img src='./src/assets/hero-slide1.png.webp'></img>
                </div>
                <div>
                    <img src='./src/assets/hero-slide2.png.webp'></img>
                </div>
                <div>
                    <img src='./src/assets/hero-slide3.png.webp'></img>
                </div>
            </div>

            <div className='px-20 py-30'>
                <h3 className='text-1xl'>Popular Item in the market</h3>
                <h1 className='text-4xl pb-20 font-bold'>Trending <span className='border-b-2 border-blue-700'>Product</span></h1>

                <div className='flex flex-wrap gap-5 items-center text-center'>
                    <div>
                        <img src='./src/assets/product1.png.webp' className='mb-3'></img>
                        <h3 className='text-1xl'>Accessories</h3>
                        <h1 className='font-bold pb-2'>Quartz Belt Watch</h1>
                        <h2 className='pb-10'>$150.00</h2>
                    </div>
                    <div>
                        <img src='./src/assets/product2.png.webp' className='mb-3'></img>
                        <h3 className='text-1xl'>Beauty</h3>
                        <h1 className='font-bold pb-2'>Women Freshwash</h1>
                        <h2 className='pb-10'>$150.00</h2>
                    </div>
                    <div>
                        <img src='./src/assets/product3.png.webp' className='mb-3'></img>
                        <h3 className='text-1xl'>Decor</h3>
                        <h1 className='font-bold pb-2'>Room Flash Light</h1>
                        <h2 className='pb-10'>$150.00</h2>
                    </div>
                    <div>
                        <img src='./src/assets/product4.png.webp' className='mb-3'></img>
                        <h3 className='text-1xl'>Decor</h3>
                        <h1 className='font-bold pb-2'>Room Flash Light</h1>
                        <h2 className='pb-10'>$150.00</h2>
                    </div>
                    <div>
                        <img src='./src/assets/product5.png.webp' className='mb-3'></img>
                        <h3 className='text-1xl'>Accessories</h3>
                        <h1 className='font-bold pb-2'>Man Office Bag</h1>
                        <h2 className='pb-10'>$150.00</h2>
                    </div>
                    <div>
                        <img src='./src/assets/product6.png.webp' className='mb-3'></img>
                        <h3 className='text-1xl'>Kid Toy</h3>
                        <h1 className='font-bold pb-2'>Charging Car</h1>
                        <h2 className='pb-10'>$150.00</h2>
                    </div>
                    <div>
                        <img src='./src/assets/product7.png.webp' className='mb-3'></img>
                        <h3 className='text-1xl'>Accessories</h3>
                        <h1 className='font-bold pb-2'>Blutooth Speaker</h1>
                        <h2 className='pb-10'>$150.00</h2>
                    </div>
                    <div className='pb-10'>
                        <img src='./src/assets/product8.png.webp' className='mb-3'></img>
                        <h3 className='text-1xl'>Kid Toy</h3>
                        <h1 className='font-bold pb-2'>Charging Car</h1>
                        <h2 className=''>$150.00</h2>
                    </div>
                </div>

            </div>

            <div className=" bg-cover bg-center px-50 py-20 h-100 " style={{ backgroundImage: "url('src/assets/Untitled design.png')" }}>

                <h1 className='text-5xl pb-5' >Up To 50% Off</h1>
                <h2 className='text-2xl font-bold'>Winter Sale</h2>
                <p className='pb-10'>Him she'd let them sixth saw ligh</p>
                <Link to="/shop">
                    <button className='border px-10 py-3 rounded-4xl text-white  bg-blue-800 cursor-pointer'>Shop Now</button>
                </Link>
            </div>



        </div>
    )
}

export default Homepage
