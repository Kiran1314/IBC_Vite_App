import React from 'react';

import { Helmet } from 'react-helmet-async';

export const Seo = ({ title, description, type, name, kwords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:site" content={name} /> 
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="keywords" content={kwords} />
    
    </Helmet>
  );
};
