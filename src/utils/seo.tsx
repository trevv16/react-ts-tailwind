import { SITE_NAME, SITE_URL, SITE_IMG, SITE_DESCRIPTION } from '../Config';

function getSeo(
  title: string | null = null,
  description: string = SITE_DESCRIPTION,
  image: string = SITE_IMG,
  site_url: string = SITE_URL
) {
  const formattedTitle = title !== null ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <>
      {/* <html lang="en" /> */}
      <title>{formattedTitle}</title>
      <link rel='canonical' href={site_url} />
      <meta name='description' content={description} />
      {/* OG SEO */}
      <meta property='og:locale' content='en_us' />
      <meta property='og:url' content={site_url} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={formattedTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:alt' content={description} />
      {/* Twitter SEO */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={image} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={description} />
    </>
  );
}

export { getSeo };
