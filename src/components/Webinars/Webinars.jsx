import React from 'react'
import SideBar from './utils/SideBar.jsx'
import { HorizontalCard } from './utils/BigCard.jsx'
import {  CardHeader, Input, Typography } from '@material-tailwind/react'
import Cyber from '../../assets/images/CyberSecurity.png'
import Girl from '../../assets/images/girl.png'
import { EmojiEmotions, Send } from '@mui/icons-material'

const Webinars = () => {
  return (
    <section className='flex w-full min-h-screen'>
          <SideBar />
        <main>
        <main className='flex flex-col sm:flex-row' style={{
      backgroundColor: "#D9D9D9"
    }}>
      <div className='max-h-screen overflow-y-scroll' style={{
        padding: "1rem 1rem",
        flex: 4,
      }}>
        <hr className='bg-blue-700 w-full px-3 h-2' />
        <div className='pt-6 flex justify-center'>
          <HorizontalCard />
          <br />
          
        </div>

        <main className='bg-[#D9D9D9] backdrop-blur-3 py-12'>
          <CardHeader className='rounded-md shadow-md px-2 py-4 border border-blue-400'>
            <div className='flex justify-around items-center w-full h-full'>
              <section>
                <Typography variant = "h5">
                  Registered
                </Typography>
                <Typography variant = "p">
                  20
                </Typography>
              </section>
              <hr className='flex flex-col w-1 h-5 bg-blue-400' />
              <section>
                <Typography variant = "h5">
                  Registration Deadline
                </Typography>
                <Typography variant = "p">
                  20/05/2024
                </Typography>
              </section>
            </div>
          </CardHeader>
        </main>

        <section className='eligibility bg-[#D9D9D9] backdrop-blur-3 pb-6'>
          <CardHeader className='rounded-md shadow-md px-2 py-4 border'>
            <div className='flex flex-row gap-x-4'>
              <div>
                <hr className='flex flex-col h-full w-1 bg-blue-500' />
              </div>
              <div>
                <Typography variant='h4' color='blue-gray'>
                  Eligibility
                </Typography>
                <Typography variant='p' color='blue-gray'>
                  Students, Tech Enthusiasts, Developers
                </Typography>
              </div>
            </div>

          </CardHeader>
        </section>

        <section className='bg-[#D9D9D9] backdrop-blur-3 pt-6'>
          < >
                <CardHeader className='rounded-md shadow-md px-2 py-4 border ps-4' >
                  <Typography variant='h4' color='blue-gray'>
                    Speaker Information
                  </Typography>

                  <div className='flex flex-row gap-x-4 pt-7'>
                    <div>
                      <hr className='flex flex-col items-center h-full w-1 bg-blue-500' />
                    </div>
      
                    <div>
                      <img src={Cyber} alt="speaker-profile" className='object-cover w-16 h-16 rounded-full shadow-md' />
                    </div>
      
                    <div className='pt-2'>
                      <Typography variant='h5' className='' color='blue-gray' >
                        SRIRAM V
                      </Typography>
                      <Typography variant='p' color='clue-gray'>
                        Entrepreneur | COO @nipix tech
                      </Typography>
                    </div>
                  </div>

                  <div className='pt-6'>
                      <Typography variant='h5' color='blue-gray' className='pb-3'>
                        Who he is?
                      </Typography>
                      <Typography variant='p' color='clue-gray'>
                      <span className='text-black font-semibold'>Sriram,</span> a dynamic entrepreneur and the COO at Nipix. Sriram possesses a unique blend of visionary leadership and strategic acumen that sets him apart in the business world. With a passion for innovation, he stands as a driving force behind Nipix's success. Beyond his executive role, Sriramemerges as an inspiring speaker, particularly adept at articulating compelling startup ideas. His charismatic delivery and deep insights make him a sought-after figure in the startup community. Sriram's commitment to fostering creativity and pushing the boundaries of conventional thinking makes him a valuable asset to both Nipix and the broader entrepreneurial landscape.
                      </Typography>
                    </div>
                </CardHeader>
              </>
            </section>

            <section className='pt-12 mt-7 relative bg-[#fff] shadow-md rounded-lg backdrop-blur-5 flex flex-wrap flex-col gap-y-12 justify-center items-center pb-6'>
              <Typography variant='h4' color='blue-gray' className=''>
                Reviews & Ratings
              </Typography>
              <hr className='bg-blue-500 h-1 w-1/2' />
              <CardHeader className='flex flex-row gap-x-12 py-3 px-2 max-w-[34rem]'>
              <div className='flex'>
                <img src={Girl} alt='profile-girl' className='h-24 w-24 sm:h-24 sm:w-24 object-cover border-none rounded-full shadow-md' />
              </div>



                <div className=''>
                  <div></div>
                  <div>
                    <div className='flex w-full h-full py-0'>
                      <Typography variant="p" color='blue-gray'>
                        The "Ideate" freelance workshop was a game-changer. In just a few sessions, it sharpened my creative thinking and equipped me with practical tools for generating innovative ideas. Highly recommend for freelancers seeking to elevate their ideation skills!
                      </Typography>
                    </div>
                    <div className='flex flex-row justify-between items-center pt-4'>
                      <div className='flex flex-row gap-x-3'>
                      <Typography variant="p" color='blue-gray'>
                        Like
                      </Typography>
                      <Typography variant="p" color='blue-gray'>
                        Reply
                      </Typography>
                      </div>

                      <Typography variant="p" color='blue-gray'>
                        1 day ago
                      </Typography>
                    </div>
                  </div>
                </div>

              </CardHeader>
              <CardHeader className='flex flex-row gap-x-12 py-3 px-2 max-w-[34rem]'>
                <div className='flex'>
                  <img src={Girl} alt='profile-girl' className='h-24 w-24 sm:h-24 sm:w-24 object-cover border-none rounded-full shadow-md' />
                </div>

                <div className=''>
                  <div></div>
                  <div>
                    <div className='flex w-full h-full py-0'>
                      <Typography variant="p" color='blue-gray'>
                        The "Ideate" freelance workshop was a game-changer. In just a few sessions, it sharpened my creative thinking and equipped me with practical tools for generating innovative ideas. Highly recommend for freelancers seeking to elevate their ideation skills!
                      </Typography>
                    </div>
                    <div className='flex flex-row justify-between items-center pt-4'>
                      <div className='flex flex-row gap-x-3'>
                      <Typography variant="p" color='blue-gray'>
                        Like
                      </Typography>
                      <Typography variant="p" color='blue-gray'>
                        Reply
                      </Typography>
                      </div>

                      <Typography variant="p" color='blue-gray'>
                        1 day ago
                      </Typography>
                    </div>
                  </div>
                </div>

              </CardHeader>
              <CardHeader className='flex flex-row gap-x-12 py-3 px-2 max-w-[34rem]'>
                <div className='flex'>
                  <img src={Girl} alt='profile-girl' className='h-24 w-24 sm:h-24 sm:w-24 object-cover border-none rounded-full shadow-md' />
                </div>

                <div className=''>
                  <div></div>
                  <div>
                    <div className='flex w-full h-full py-0'>
                      <Typography variant="p" color='blue-gray'>
                        The "Ideate" freelance workshop was a game-changer. In just a few sessions, it sharpened my creative thinking and equipped me with practical tools for generating innovative ideas. Highly recommend for freelancers seeking to elevate their ideation skills!
                      </Typography>
                    </div>
                    <div className='flex flex-row justify-between items-center pt-4'>
                      <div className='flex flex-row gap-x-3'>
                      <Typography variant="p" color='blue-gray'>
                        Like
                      </Typography>
                      <Typography variant="p" color='blue-gray'>
                        Reply
                      </Typography>
                      </div>

                      <Typography variant="p" color='blue-gray'>
                        1 day ago
                      </Typography>
                    </div>
                  </div>
                </div>

              </CardHeader>
              <CardHeader className='flex flex-row gap-x-12 py-3 px-2 max-w-[34rem]'>
                <div className='flex'>
                  <img src={Girl} alt='profile-girl' className='h-24 w-24 sm:h-24 sm:w-24 object-cover border-none rounded-full shadow-md' />
                </div>

                <div className=''>
                  <div></div>
                  <div>
                    <div className='flex w-full h-full py-0'>
                      <Typography variant="p" color='blue-gray'>
                        The "Ideate" freelance workshop was a game-changer. In just a few sessions, it sharpened my creative thinking and equipped me with practical tools for generating innovative ideas. Highly recommend for freelancers seeking to elevate their ideation skills!
                      </Typography>
                    </div>
                    <div className='flex flex-row justify-between items-center pt-4'>
                      <div className='flex flex-row gap-x-3'>
                      <Typography variant="p" color='blue-gray'>
                        Like
                      </Typography>
                      <Typography variant="p" color='blue-gray'>
                        Reply
                      </Typography>
                      </div>

                      <Typography variant="p" color='blue-gray'>
                        1 day ago
                      </Typography>
                    </div>
                  </div>
                </div>

              </CardHeader>

              <section className='input w-3/4 flex flex-row gap-0 items-center'>
                <Input size='lg' color='blue' label='comment here' variant='outlined' placeholder='Leave a Comment' icon={<EmojiEmotions />} />
                <div className='bg-blue-500 h-full py-2 rounded-md shadow-md px-2 border border-1 border-blue-400 hover:border-green-400 transition-colors'>
                  <Send />
                </div>
              </section>
            </section>
          </div>
        </main>
            </main>
    </section>
  )
}

export default Webinars