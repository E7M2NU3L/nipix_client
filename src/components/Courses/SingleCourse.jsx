import { Typography } from '@material-tailwind/react'
import React from 'react'
import Lectures from './utils/Lectures'

const SingleCourse = () => {
  return (
    <div className='min-h-[90vh] flex flex-col sm:flex-row'>
        <section className='w-full sm:w-[70%] min-h-[72vh] bg-gray-100'>
            <video className="h-full w-full rounded-none shadow-blue-300 shadow-md max-h-[72vh]" controls autoPlay>
            <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>

            <section className='w-[85%] mx-auto'>
                <section className='flex justify-between items-center'>
                <Typography className='text-xl sm:text-2xl font-bold  pt-[1.1rem]'>
                    Introduction Part-1
                </Typography>

                <Typography className='text-sm sm:text-md font-light text-gray-600'>
                    Introduction to ML
                </Typography>
                </section>

                <Typography className='pt-[0.6rem] pb-[2rem] font-semibold text-lg sm:text-xl'>
                Welcome to NIpix Tech, where we unlock the doors to boundless knowledge in the world of technology. Join us as we bridge the virtual gap
                </Typography>
            </section>
        </section>

        <section className='w-full sm:w-[30%] max-h-[100vh] bg-gray-200 overflow-y-auto'> {/* Changed max-h to overflow-y-auto */}

            <div className='sticky top-0 bg-gray-800 py-[1.3rem]'>
                <Typography className='text-2xl font-bold w-full text-center justify-center text-white'>
                    Lecture Videos
                </Typography>
            </div>

            <section className='w-full relative text-center justify-center items-center flex flex-col gap-y-[1rem] overflow-y-visible'>
                <Lectures />      
                <Lectures />             
                <Lectures />   
                <Lectures />   
                <Lectures />   
                <Lectures />   
                <Lectures />   
                <Lectures />   
                <Lectures />   
                <Lectures />   
                <Lectures />
                <Lectures />   
                <Lectures />   
                <Lectures />   
            </section>
        </section>
    </div>
  )
}

export default SingleCourse
