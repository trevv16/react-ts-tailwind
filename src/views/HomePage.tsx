import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { getSeo } from '../utils/seo';

const HomePage: FC<any> = () => {
  return (
    <>
      <Helmet>{getSeo('The Home of Business Ideas')}</Helmet>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto my-80'></div>
      </div>
    </>
  );
};

export default HomePage;
