import React from 'react'
import Hero from './utils/Hero'
import Main from './utils/Main'
import Products from './utils/Products'
import About from './utils/About'
import Webinars from './utils/Webinars'
import { useSelector } from 'react-redux'
import { authStatus } from '../../features/authSlice'

const Home = () => {
  const authInfo = useSelector(authStatus);
  console.log(authInfo);
  return (
    <>
        <Hero />
        <Products />
        <Webinars />
        <Main />
        <About />
    </>
  )
}

export default Home