import React from 'react'
import { ProfileCard } from './utils/ProfileCard'
import { Link } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'

const ProfileC = () => {
  return (
    <div className='w-3/4 justify-center items-center'>
      <div className='relative'>
        <Typography variant='h2' className='relative flex justify-center items-center w-full h-full py-[2rem]'>
            <span className='pe-2 text-blue-500 font-semibold'>Profile</span> Page
        </Typography>

        <button className='bg-blue-400 sm:right-[3rem] right-[0rem] bottom-[0.5rem] absolute px-4 py-2 rounded-md hover:shadow-md text-white font-semibold hover:font-bold mb-[1rem] hover:bg-green-400 transition-all duration-300 ease-in-out'>
            <Link to="/profile/update">
                Edit
            </Link>
        </button>
        </div>
        <ProfileCard />
    </div>
  )
}

export default ProfileC