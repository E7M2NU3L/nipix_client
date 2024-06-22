import { Typography } from '@material-tailwind/react'
import React from 'react'
import CourseCard from './utils/CourseCard'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div className='w-3/4 bg-gray-100'>
        <Typography className='text-3xl font-bold ps-[2rem] pt-[3rem]'>
            Course Cart
        </Typography>

        <section className='flex w-full justify-center py-[2rem] items-start gap-x-[1.4rem] flex-wrap gap-y-[2rem]'>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </section>

        <section className='py-[2rem] text-center w-full '>
            <Link to="/courses" className='text-blue-500 hover:text-blue-700 hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out' style={{
                letterSpacing: '3px',
                fontWeight: 600,
            }}>
                Explore More Courses
            </Link>
        </section>
    </div>
  )
}

export default Courses