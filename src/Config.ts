export const SITE_NAME = "Trevor's Portfolio";
export const SITE_DESCRIPTION = 'site description';
export const SITE_IMG = 'https://source.unsplash.com/random';

export const DEV_SITE_URL = process.env.REACT_APP_DEV_SITE_URL || '';
export const PROD_SITE_URL = process.env.REACT_APP_PROD_SITE_URL || '';

export const SITE_URL = process.env.NODE_ENV === 'production' ? PROD_SITE_URL : DEV_SITE_URL;
