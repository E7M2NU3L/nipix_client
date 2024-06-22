import React, { useState } from 'react'
import './main.css'
import Logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import DrawerRight from './utils/DrawerRight'
import LogoutModal from './utils/LogoutModal'
import { Shop2 } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { authStatus } from '../../features/authSlice'

const Navbar = () => {

  const authInfo = useSelector(authStatus);
  const authentication = authInfo.isLoggedin;

  return (
    <div className='flex justify-between items-center w-full min-h-[10vh] bg-dark-1 px-4'>
      <Link to="/">
      <div className='rounded-full flex justify-center items-center gap-x-[1rem]'>
          <img src={Logo} alt='admin-panel-nipix' className='rounded-full w-12 h-12  hover:translate-x-2 hover:scale-105 transition-all duration-300 ease-in-out' />
          <h1 className='text-xl hidden sm:flex text-dark-2 font-semibold'>
            Nipix <span className='text-blue-400 font-bold'>Tech</span> 
          </h1>
      </div>
      </Link>
      
      <ul className='sm:flex items-center gap-x-[2rem] justify-center hidden'>
        <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='' to="/courses ">
            Courses
          </Link>
        </li>
        <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='' to="/webinars">
            Webinars
          </Link>
        </li>
        <li className='text-md text-dark-2 font-semibold hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
          <Link className='' to="/gallery">
            Gallery
          </Link>
        </li>
      </ul>

      
    
       <>
        {(authentication) ? (
          <React.Fragment>
            <div className='rounded-lg sm:flex justify-around items-center gap-x-[1rem] hidden '>
              <Link to="/cart">
                <Shop2 />
              </Link>
              <h1 className='text-md text-dark-4 font-bold hover:text-dark-4 hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
                <Link to="/profile">
                  profile
                </Link>
              </h1>
              <LogoutModal />
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className='rounded-lg sm:flex justify-around items-center gap-x-[1rem] hidden '>
            <button className='text-md text-white bg-blue-500 px-2 py-1 rounded-lg shadow-md font-semibold hover:translate-x-1 hover:bg-blue-500 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out'>
              <Link to="/login">
                Login
              </Link>
            </button> 
            <h1 className='text-md text-dark-4 font-bold hover:text-dark-4 hover:translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
              <Link to="/register">
                sign up
              </Link>
            </h1>
            </div>
            
          </React.Fragment>
        )}
       </>

    <div className='sm:hidden block'>
      <DrawerRight />
    </div>

    </div>
  )
}

export default Navbar