import React from 'react'
import { useSelector } from 'react-redux'
import { authStatus } from '../features/authSlice'
import { Login } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const IsLoggedin = ({children}) => {
    const authInfo = useSelector(authStatus);
    const authentication = authInfo.isLoggedin;

    const conditionalRender = () => {
        return (
            <React.Fragment>
                {(authentication === true ) ?  (
                    <>
                        {children}
                    </>
                ) : (
                    <>
                        <section className='flex flex-col justify-center items-center min-h-screen'>
                        <div className='w-[250px] flex justify-center flex-col px-[1.4rem] items-center gap-y-[1.8rem] py-[2.5rem] rounded-lg shadow-md hover:translate-x-2 hover:scale-110 hover:shadow-lg shadow-gray-400 hover:shadow-gray-600 transition-all duration-300 ease-in-out bg-gray-300 hover:bg-gray-400 text-gray-800'>
                            <h1 className='text-2xl  font-bold text-gray-800 flex gap-x-[9px] text-center'>
                                You are not Logged in!!
                            </h1>

                            <Link to="/login">
                            <button className='bg-blue-500 text-white font-semibold hover:translate-x-2 hover:scale-105 flex px-6 py-2 rounded-md justify-around items-center gap-x-[7px] hover:bg-green-500 transition-all duration-300 ease-in-out'>
                                <Login className='text-white font-bold' />
                                Login
                            </button>
                            </Link>
                            
                        </div>
                        </section>
                    </>
                )}
            </React.Fragment>
        )
    }
  return (
    <div>
        {conditionalRender()}
    </div>
  )
}

export default IsLoggedin