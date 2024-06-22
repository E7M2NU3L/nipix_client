import React from 'react'
import AboutPost from '../../../assets/images/about-poster1.jpg'
 
const About = () => {
  return (
    <div className=''>
      <section className='flex flex-col justify-center items-center gap-x-[3rem] pb-[2rem]'>
        <main className='flex justify-center pt-[2rem] sm:flex-row flex-col items-center w-full gap-x-[3rem]'>
          <h3 className='text-4xl sm:text-5xl font-bold max-w-[25rem]'>
            Nipix Tech:  <span className='text-blue-400'>Our Aim is to Provide Knowledge in a right way 
            </span></h3>

          <section>
            <img src={AboutPost} alt='about' className='w-[450px] h-[400px]' />
          </section>
        </main>

        <main className='flex flex-col sm:flex-row justify-center items-center gap-x-[5rem] pb-[2rem] px-[3rem]'>
          <section className='max-w-[25rem]'>
            <p className='font-semibold'>
              Nipixtech is a forward-thinking technology company committed to solving real-world problems through innovative products and services. With a strong emphasis on cutting-edge technology and a passion for creating positive change, Nipixtech is at the forefront of transforming industries and improving lives.
            </p>
          </section>

          <section className='flex justify-around items-center gap-x-[1rem] sm:gap-x-[2rem]'>
            <div className='bg-gray-200 shadow-md shadow-gray-400 px-4 py-2'>
              <h1 className='text-2xl font-bold'>
                50 +
              </h1>
              <h6 className='text-lg font-semibold'>
                Workshops
              </h6>
            </div>
            <div className='bg-gray-200 shadow-md shadow-gray-400 px-4 py-2'>
              <h1 className='text-2xl font-bold'>
                Top
              </h1>
              <h6 className='text-lg font-semibold'>
                Courses
              </h6>
            </div> <div className='bg-gray-200 shadow-md shadow-gray-400 px-4 py-2'>
              <h1 className='text-2xl font-bold'>
                Best
              </h1>
              <h6 className='text-lg font-semibold'>
                Learning
              </h6>
            </div>
          </section>
        </main>
      </section>
    </div>
  )
}

export default About