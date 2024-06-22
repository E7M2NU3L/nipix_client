import React from 'react'
import CarouselG from './CarouselG'
import { Typography } from '@mui/material'

const GalleryHero = () => {
  return (
    <div className='min-h-[90vh] flex w-full items-center justify-around flex-col sm:flex-row py-[3rem]'>
        <section className='max-w-[20rem] pb-[3rem]'>
            <h1 className='text-3xl font-bold text-gray-800'>
            Welcome to the<span className='text-blue-500 ps-2'>
                    Nipix Gallery
                </span>
            </h1>

            <Typography className='pt-[0.8rem] pb-[1.3rem] font-md font-light'>        
            Welcome to the NIPIX Gallery, the central hub for all our event highlights and company updates. Here at Nipix Tech, we believe in capturing and sharing the moments that define our journey. Our gallery showcases a collection of images and posts from various events, providing a glimpse into the vibrant culture and innovative spirit of our company.
            </Typography>

            <button className='text-md font-semibold hover:font-bold px-6 py-2 rounded-md hover:rounded-lg bg-gradient-to-tr from-blue-400 to-blue-600 text-white'>
                Explore
            </button>
        </section>

        <section>
            <CarouselG />
        </section>
    </div>
  )
}

export default GalleryHero