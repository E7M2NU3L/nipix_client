import { Rating, Typography } from '@material-tailwind/react';
import React from 'react'
import PlaceHolder from '../../../assets/images/IOT.jpg'
import { Link } from 'react-router-dom';

const CourseCard = () => {
  return (
    <div className='min-h-[30vh] w-[300px] shadow-lg shadow-gray-400 rounded-lg hover:translate-x-1 hover:scale-105 transition-all duration-200 ease-in-out flex gap-x-[4px]'>

        <section className='w-[40%] h-full'>
            <img src={PlaceHolder} alt='course' className='object-fill min-h-[30vh] w-full' style={{
                objectPosition: "center",
                objectFit: 'fill'
            }} />
        </section>

        <section className='w-[60%]'>
            <Typography className='text-xl font-bold pt-[6px]'>
                Intro to Machine Learning
            </Typography>

            <Typography className='text-md font-semibold pt-[4px]'>
                Prof. Nishok
            </Typography>

            <Rating value={4} contentEditable={false} />
            <Typography className='text-sm font-light py-[0.5rem]'>
                72+ Video Lectures
            </Typography>
            
            <section className='flex justify-between items-center w-full'>
            <Link to="/course/payment" >
            <button className='bg-blue-500 hover:bg-green-500 px-4 py-2 rounded-lg text-white font-semibold hvoer:font-bold hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-out'>
                Buy
            </button>
            </Link>

                
            </section>
        </section>
    </div>
  )
}

export default CourseCard;