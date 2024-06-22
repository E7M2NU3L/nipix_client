import { Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'
import { CircularProgress, Pagination } from '@mui/material'
import { Link } from 'react-router-dom'
import db_Service from '../../../api/Database'

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const req = await db_Service.GetCourses();
        setData(req.documents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWebinars();
  }, []);

  if (loading) {
    return (
      <main className='w-full min-h-[30vh] flex justify-center items-center'>
        <CircularProgress />
      </main>
    );
  }

  if (error) {
    return (
      <main className='w-full min-h-[30vh] flex justify-center items-center'>
        <Typography variant="h6" color="error">{error}</Typography>
      </main>
    );
  }

  return (
    <main id="products">

      <section className=''>
        <Typography variant="h3" color="blue-gray" className="my-2 flex justify-center items-center">
                Courses For <span className='text-blue-500 font-bold px-3'>You</span>
            </Typography>
      </section>

      <section className='pt-[1rem] pb-[3rem] justify-center gap-x-[1.2rem] gap-y-[2rem] items-center flex w-full flex-wrap'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>

      <h1 className='text-xl font-semibold text-blue-500 hover:translate-x-2 hover:scale-105 transition-all duration-200 ease-in-out text-center items-center flex justify-center w-full pb-[4rem]' style={{
        letterSpacing: 2,
        fontWeight: 600
      }}>
      <Link to="/courses" >
        View More Courses
      </Link>
      </h1>
    </main>
  )
}

export default Products