import React from 'react'
import imagePlace from '../../../assets/images/IOT.jpg'
import { Divider, Typography } from '@mui/material'
import { FunctionsTwoTone, Timelapse } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const WebinarCard = () => {
  return (
    <div>
        <section className='flex justify-center items-center flex-col w-[300px] min-height-[30rem] rounded-md shadow-gray-400 shadow-lg my-[2rem]'>
            <section className='relative'>
            <img src={imagePlace} alt='placeholder' className='relative opacity-[0.9]' />
            <Typography className='absolute top-2 right-2 bg-gray-800 p-2 text-blue-200 shadow-gray-600 shadow-md'>
                Upcoming <FunctionsTwoTone />
            </Typography>
            <Typography className='absolute top-2 left-2 bg-gray-800 p-2 text-blue-300 px-2 shadow-gray-600 shadow-md'>
                3hrs <Timelapse />
            </Typography>
            </section>

            <section className='w-full px-2'>
                <Typography variant='h5' className='text-dark-2 font-bold pt-2'>
                    Introduction to Web development
                </Typography>
                <Typography variant='p' className='w-full flex justify-end mt-0 pe-2 text-dark-2'>
                    Instructor. Nishok
                </Typography>

                <div className='my-[1rem] w-full flex justify-center'>
                    <Divider className='w-1/2 mx-auto bg-gray-300 h-1' />
                </div>

                <Typography variant='p' className='text-dark-4'>
                    Welcome to "Introduction to Web Development," a comprehensive course designed for beginners looking to dive into the world of web development.
                </Typography>

                <div className='py-2 justify-between px-3 flex items-center w-full'>
                    <Link to="/admin/course/single" >
                    <button className='flex bg-gradient-to-tr from-blue-500 to-blue-300 text-white px-8 py-2 font-semibold rounded-lg hover:bg-dark-2 hover:scale-110 
                    hover:translate-x-2 transition-all duration-200 ease-in-out'>
                        View
                    </button>
                    </Link>

                    <Link to="/admin/course/single" >
                    <button className='flex text-white bg-green-500 hover:bg-gradient-to-tr hover:from-green-400 hover:via-lime-600 hover:to-teal-500 hover:text-gray-700 px-8 py-2 font-semibold rounded-lg hover:bg-dark-2 hover:scale-110 
                    hover:translate-x-2 transition-all duration-200 ease-in-out'>
                        Register
                    </button>
                    </Link>
                </div>
            </section>
        </section>
    </div>
  )
}

export default WebinarCard