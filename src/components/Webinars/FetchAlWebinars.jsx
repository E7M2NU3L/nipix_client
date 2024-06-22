import React, { useEffect, useState } from 'react'
import WebinarCard1 from './utils/WebinarCard1'
import { Typography } from '@material-tailwind/react'
import { BookingCard } from './utils/CardVariant'
import { CircularProgress } from '@mui/material'
import db_Service from '../../api/Database'

const FetchAlWebinars = () => {
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const req = await db_Service.GetWebinars();
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
    <main>
        <section className='w-full'>
            <Typography className='text-center w-full flex text-3xl ps-[1.5rem] sm:ps-[3rem] py-[1.8rem] sm:py-[2.3rem] text-gray-800'>
                Upcoming <span className='text-blue-500 font-extrabold ps-2'>Webinars</span>
            </Typography>
            <div className='flex w-full justify-center items-center gap-x-[1.5rem] min-h-[90vh] flex-wrap gap-y-[2rem]'>
                {data && data.map((content) => (
                    <>
                        <WebinarCard1 key={content.id} content={content} />
                    </>
                ))}
            </div>
        </section>

        <section className='w-full pb-[3rem]'>
            <Typography className='text-center w-full flex text-3xl ps-[1.5rem] sm:ps-[3rem] py-[1.8rem] sm:py-[2.3rem] text-gray-800'>
                Previous <span className='text-green-500 font-extrabold ps-2'>Webinars</span>
            </Typography>

            <section className='flex w-full justify-center items-center gap-x-[1.5rem] min-h-[90vh] flex-wrap gap-y-[2rem]'>
                {data && data.map((content) => (
                    <>
                        <BookingCard key={content.id} content={content} />
                    </>
                ))}
            </section>
        </section>
    </main>
  )
}

export default FetchAlWebinars