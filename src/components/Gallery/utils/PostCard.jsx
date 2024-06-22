import React from 'react';
import PropTypes from 'prop-types';

const PostCard = ({ title, description, image }) => {
  return (
    <section className='w-[300px] sm:w-[400px] min-h-[400px] shadow-md hover:scale-105 hover:translate-x-2 hover:shadow-lg hover:shadow-gray-500 shadow-gray-400 relative transition-all duration-300 ease-in-out'>
      <img src={image} alt={title} className='w-full h-[60%]' />
      <section className='h-[40%] px-[1rem] pb-[1.4rem]'>
        <h1 className='text-2xl font-bold pt-[0.9rem] pb-[0.7rem]'>
          {title}
        </h1>
        <h3 className='text-sm font-light text-gray-800'>
          {description}
        </h3>
      </section>
    </section>
  );
};

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default PostCard;
