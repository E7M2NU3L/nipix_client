import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import HeroLogo from '../../../assets/images/hero-img.png'
import { Link } from 'react-router-dom'
import { ArrowRight } from '@mui/icons-material'

const Hero = () => {
  return (
    <main className='min-h-[90vh] w-full flex flex-col md:flex-row mx-auto items-center justify-around pt-[3rem] pb-[3rem] sm:pt-[2rem] sm:pb-0 px-4 sm:px-8'>
      <div className='flex flex-col justify-center max-w-[24rem] text-center sm:text-left'>
        <Typography className='text-sm font-bold text-blue-500'>
          #1 Learning platform
        </Typography>
        <Typography variant='h3' color='blue-gray' className='font-extrabold pb-4'>
          Empower Your Tech Journey with NIpix Tech
        </Typography>
        <Typography variant='p' color='blue-gray' className='text-md font-extralight'>
          Welcome to NIpix Tech, where we unlock the doors to boundless knowledge in the world of technology. Join us as we bridge the virtual gap, <span className='text-blue-500 font-extralight'>
          connecting minds from all corners of the globe, and embark on a transformative journey of learning and growth.</span>  
        </Typography>

        <Link to="/register">
          <Button variant='gradient' className='flex items-center gap-3 hover:shadow-lg mx-auto mt-4 sm:mt-6'>
            Explore
            <ArrowRight />
          </Button>
        </Link>
      </div>

      <img src={HeroLogo} alt='hero-sect-logo' className='w-full sm:w-auto max-w-lg pt-[2rem] sm:pt-0' />  
    </main>
  )
}

export default Hero
