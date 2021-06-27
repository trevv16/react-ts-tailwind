import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_NAME, SITE_URL, SITE_IMG, SITE_DESC } from '../Config';
import { getSeo } from '../utils/seo';

const HomePage: FC<any> = () => {
  const title = `The Home of Business Ideas | ${SITE_NAME}`;

  return (
    <>
      <Helmet>{getSeo(title, SITE_DESC, SITE_IMG, SITE_URL)}</Helmet>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto my-80'></div>
      </div>
    </>
  );
};

export default HomePage;
