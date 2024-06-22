import React, { useState } from 'react';
import PostCard from './utils/PostCard';
import { Pagination, PaginationItem, Stack } from '@mui/material';
import PlaceHolder from '../../assets/static/picturesquare-2.webp';

const Posts = () => {
  const dummyData = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: `Event ${index + 1}`,
    description: `Description for event ${index + 1}`,
    image: PlaceHolder,
  }));
  
  const ITEMS_PER_PAGE = 6;
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const paginatedData = dummyData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div>
      <section className='w-full text-center items-center pb-[1.3rem]'>
        <h1 className='text-3xl font-bold'>
          Recent <span className='text-underline text-blue-500'>Events</span>
        </h1>
      </section>

      <main className='flex justify-center items-center w-full h-full py-[2.2rem] flex-wrap gap-x-[1.8rem] gap-y-[2rem] sm:gap-y-[2.2rem]'>
        {paginatedData.map((item) => (
          <PostCard key={item.id} title={item.title} description={item.description} image={item.image} />
        ))}
      </main>

      <section className='py-[3rem] w-full justify-center flex items-center'>
        <Stack spacing={2} className="pagination-container">
          <Pagination
            count={Math.ceil(dummyData.length / ITEMS_PER_PAGE)}
            page={page}
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                {...item}
              />
            )}
          />
        </Stack>
      </section>
    </div>
  );
};

export default Posts;
