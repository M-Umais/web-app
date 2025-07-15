import React from 'react'
import src1 from '../../assets/tea.webp'
import src2 from '../../assets/forest.webp'
import src3 from '../../assets/couple.webp'
import src4 from '../../assets/girl.webp'
import src5 from '../../assets/factoryarea.webp'
import Gallery from './instagallery'
import Navbar from '../navbar/navbar'
import Blogsection1, { Blogsection3 } from './blogsection'
import { Blogsection4 } from './blogsection4'

export default function Blog() {
    const imgData2 = [
        {
            src: src1,
            heading: "Astronomy Binoculars A Great Alternative",
            descrp: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
            button: "View more",
        },
        {
            src: src2,
            heading: "The Basics Of Buying A Telescope",
            descrp: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
            button: "View more",
        },
        {
            src: src3,
            heading: "The Glossary Of Telescopes",
            descrp: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
            button: "View more",
        },
        {
            src: src4,
            heading: "The Night Sky",
            descrp: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
            button: "View more",
        },
        {
            src: src5,
            heading: "Telescopes 101",
            descrp: "MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.",
            button: "View more",
        },
    ]

    return (
        <>
            <Navbar className='bg-white shadow-lg' />
            <Blogsection1 />
            <div className='grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 justify-center '>
                <div className="col-span-2">
                    {imgData2.map((item, index) => (
                        <Blogsection3 key={index} {...item} /> //this spread operator is used to pass all properties or object from imgdata2 to Blogsection2 in one line.
                    ))}
                </div>
                <Blogsection4 />
            </div>
            <Gallery />
        </>
    )
}