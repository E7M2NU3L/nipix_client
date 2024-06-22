import { DateRange, Timelapse } from '@mui/icons-material'
import React from 'react'
import PlaceHolder from '../../../assets/images/hero-img.png';
import { Divider, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const WebinarCard1 = () => {

    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/webinar/register');
    }

    const handleNav = (e) => {
        e.preventDefault();
        navigate('/webinars/1234')
    }

    return (
    <div className='w-[230px] min-h-[25rem] bg-gray-100 shadow-md shadow-gray-500 hover:shadow-lg rounded-lg hover:scale-105 translate-x-1 transition-all duration-200 ease-in-out' onClick={handleNav}>
        <img src={PlaceHolder} alt='placeholder' className='w-full object-fit h-[14rem]' />
        
        <section className='flex flex-col justify-center items-center w-full h-full px-2 text-center'>
            <Typography variant='h6' className='font-semibold text-dark-2'>
                Machine Learning tools for HRM
            </Typography>

            <div className='w-full flex justify-between items-center'>
                <div className='flex gap-x-[0.5rem]'>
                    <Timelapse />
                    <h1 className='font-semibold text-md'>
                        3 hrs
                    </h1>
                </div>

                <div className='flex gap-x-[0.5rem]'>
                    <DateRange />
                    <h1 className='font-semibold text-md'>
                        Feb 22, 2024
                    </h1>
                </div>
            </div>

            <section className='mt-1'>
            <Divider className='w-[90px] mx-auto bg-dark-5' />
            </section>

            <Typography variant='body-2' className='font-light text-[12px] pt-1 text-dark-4'>
            Arthur is a thoughtful and insightful individual with a keen sense of observation. He has dark brown hair and warm.
            </Typography>

            <section className='flex w-full justify-around items-center pt-2'>
                <button className='bg-blue-500 text-white px-4 py-2 mb-[1rem] rounded-lg hover:translate-x-1 hover:scale-110 hover:bg-gradient-to-tr hover:from-blue-400 hover:to-purple-400 hover:text-white transition-all duration-300 ease-in-out' onClick={handleClick}>
                    Register
                </button>
           </section>
        </section>
    </div>
  )
}

export default WebinarCard1