import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_NAME, SITE_URL, SITE_IMG, SITE_DESC } from '../Config';

const HomePage: FC<any> = () => {
  const title = `The Home of Business Ideas | ${SITE_NAME}`;

  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <link rel='canonical' href={SITE_URL} />
        <meta name='description' content={SITE_DESC} />
        {/* OG SEO */}
        <meta property='og:locale' content='en_us' />
        <meta property='og:url' content={SITE_URL} />s
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={SITE_DESC} />
        <meta property='og:image' content={SITE_IMG} />
        <meta property='og:image:alt' content={SITE_DESC} />
        {/* Twitter SEO */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content={SITE_IMG} />
        <meta name='twitter:description' content={SITE_DESC} />
        <meta name='twitter:image' content={SITE_IMG} />
        <meta name='twitter:image:alt' content={SITE_DESC} />
      </Helmet>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto my-80'></div>
      </div>
    </>
  );
};

export default HomePage;
