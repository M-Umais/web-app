import ins1 from '../images/ins-1.jpg.webp'
import ins2 from '../images/ins-2.jpg.webp'
import ins3 from '../images/ins-3.jpg.webp'
import ins4 from '../images/ins-4.jpg.webp'
import ins5 from '../images/ins-5.jpg.webp'


export default function Gallery() {
    return (
        <>
            <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 w-full my-8'>
                <div className="img">
                    <img src={ins1} />
                </div>
                <div className="img">
                    <img src={ins2} />
                </div>
                <div className="img">
                    <img src={ins3} />
                </div>
                <div className="img">
                    <img src={ins4} />
                </div>
                <div className="img">
                    <img src={ins5} />
                </div>
            </div >
            <div className='flex justify-center my-[-50px]'>
                <button  className="bg-white shadow-md px-4 py-3 mb-14 cursor-pointer ">Follow us on Instagram</button>
            </div>
        </>
    )
}