import React, { useEffect, useState } from 'react'
import { HorizontalCard } from './utils/BigCard'
import { Typography } from '@material-tailwind/react'
import db_Service from '../../api/Database';
import { CircularProgress } from '@mui/material';

const Courses = () => {
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
    <main className='flex flex-col sm:flex-row bg-gray-100'>
        <div className='min-h-[95vh]'>

          <section className='pb-[2rem]'>
            <main className='w-full text-center justify-center py-[2rem]'>
            <Typography className='font-bold text-3xl'>
            Awesome Courses For <span className='font-bold text-blue-500'>You</span>
          </Typography>
            </main>

            <main className='justify-center items-center gap-x-[1.4rem] gap-y-[2rem] flex flex-wrap'>
              <HorizontalCard />     
              <HorizontalCard />     
              <HorizontalCard />     
              <HorizontalCard />     
            </main>
          </section>       
        </div>
    </main>
  )
}

export default Courses