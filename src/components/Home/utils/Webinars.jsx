import React, { useState, useEffect } from 'react';
import WebinarCard from './WebinarCard';
import { CircularProgress, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import db_Service from '../../../api/Database';

const Webinars = () => {
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
      <Typography className='text-center w-full flex justify-center items-center text-3xl font-bold' component="div" variant='h4' sx={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 700
      }}>
        Webinars For <span className='text-blue-500 px-3'>You</span>
      </Typography>

      <section className='pt-[2rem] pb-[1rem] justify-center gap-x-[1.2rem] gap-y-[2rem] items-center flex w-full flex-wrap'>
        {data && data.map((content) => (
          <WebinarCard key={content.id} content={content} />
        ))}
      </section>

      <h1 className='text-xl font-semibold text-blue-500 hover:translate-x-2 hover:scale-105 transition-all duration-200 ease-in-out text-center items-center flex justify-center w-full pb-[4rem]' style={{
        letterSpacing: 2,
        fontWeight: 600
      }}>
        <Link to="/webinars">
          View More Webinars
        </Link>
      </h1>
    </main>
  );
}

export default Webinars;
