import { Typography } from '@material-tailwind/react'
import React from 'react'
import './main.css';
import BG from '../../../assets/images/bg-img.png';
import Review1 from '../../../assets/images/review-boy1.png';
import Review2 from '../../../assets/images/review-boy2.png';

const Main = () => {
  return (
    <div className='flex flex-col justify-center items-center' id='feedbacks'>
      <Typography variant='h3' color='blue-gray'>
        Gained from <span className='text-blue-500'>Webinars</span>
      </Typography>

      <Typography className='pt-4 pb-4' variant='h4' color='blue-gray'>
      Why people choose Nipix for their career?
      </Typography>

      <div className='pt-4 feed min-h-screen' style={{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100%',
        height: '100%'
      }}>
        <div className='card max-w-[24rem] mx-auto flex flex-col gap-y-3 rounded-lg shadow-md mt-3 ps-3' style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(8px)"
        }}>
          <div className='flex flex-row justify-center mt-3'>
            <img src={Review1} alt='review-1' className='h-24 w-24 rounded-full shadow-lg shadow-blue-500 pt-1' />
          </div>
          <div className='max-w-[20rem] mx-auto pt-3'>
            <Typography variant='p' className='text-[#fefedf] text-sm'>
              Artificial intelligence (AI) is 
              reimagining the business world,
              boosting innovation and productivity
              <span className='font-semibold font-[#fff]'>
              “Good thing I learned Artificial 
              intelligence from Nipix Webinar”,
              </span>
               As We don’t want to be left behind this in this competitive world. Thanks to Nipix Community.
            </Typography>
          </div>

          <div className='flex justify-center items-center pb-3'>
            <Typography variant='h6' className='text-sm text-[#fff]' >
            Charles | New zealand
            </Typography>
          </div>
        </div>
        <div className='card max-w-[24rem] mx-auto flex flex-col gap-y-3 rounded-lg shadow-md mt-3 ps-3' style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(8px)"
        }}>
          <div className='flex flex-row justify-center mt-3'>
            <img src={Review2} alt='review-1' className='h-24 w-24 rounded-full shadow-lg shadow-blue-500 pt-1' />
          </div>
          <div className='max-w-[20rem] mx-auto pt-3'>
            <Typography variant='p' className='text-[#fefedf] text-sm'>
            The Webinars in It literally helped me a lot.
              <span className='font-semibold font-[#fff]'>
              the Nipix Company Made me a Billionaire. “I learned business statistics and analysis to develop my business”.
              </span>
              Thank you to Nipix Company.
            </Typography>
          </div>

          <div className='flex justify-center items-center pb-3'>
            <Typography variant='h6' className='text-sm text-[#fff]' >
            Richard | India
            </Typography>
          </div>
        </div>

        <div className='mt-12 flex max-w-[14rem] justify-end items-end mx-auto border-black rounded-lg shadow-md mb-[3rem]' style={{
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
            padding:"20px 30px"
        }}>
          <Typography variant='h3' className='text-2xl text-[#fefedf] font-bold'>
          Beyond Boundaries: Explore, Learn, Thrive with Our Exclusive Webinars
          </Typography>
      </div>
    </div>
    </div>
  )
}

export default Main