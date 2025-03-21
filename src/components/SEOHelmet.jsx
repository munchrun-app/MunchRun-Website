import React from 'react';
import { Helmet } from 'react-helmet';

// This component manages all SEO metadata dynamically
const SEOHelmet = ({ 
  title = 'MunchRun - Fair and Transparent Food Delivery in Melbourne',
  description = 'MunchRun is a new food delivery platform in Melbourne, Australia, offering fair pay for drivers, zero commissions for restaurants, and a great experience for customers.',
  canonicalUrl = '',
  imageUrl = '/meta-image.jpg',
  schemaType = 'Organization',
  keywords = 'food delivery, Melbourne, restaurants, drivers, fair pay, no commission, local food, ethical, sustainable',
  article = null,
}) => {
  // Base URL from environment or default
  const siteUrl = 'https://www.munchrun.com.au';
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullImageUrl = `${siteUrl}${imageUrl}`;
  
  // Build schema based on type
  let schema;
  if (schemaType === 'Organization') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'MunchRun',
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      sameAs: [
        'https://discord.gg/6TfycPfEDh',
        // Add other social profiles when available
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'contact@munchrun.com.au',
        contactType: 'customer service',
        availableLanguage: 'English'
      },
      description
    };
  } else if (schemaType === 'FoodDeliveryService') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'FoodDeliveryService',
      name: 'MunchRun',
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      areaServed: {
        '@type': 'City',
        name: 'Melbourne',
        containedIn: {
          '@type': 'State',
          name: 'Victoria'
        }
      },
      description
    };
  } else if (schemaType === 'Article' && article) {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      image: [fullImageUrl],
      datePublished: article.publishDate,
      dateModified: article.modifiedDate,
      author: {
        '@type': 'Organization',
        name: 'MunchRun',
        url: siteUrl
      },
      publisher: {
        '@type': 'Organization',
        name: 'MunchRun',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.png`
        }
      },
      description: article.description || description
    };
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="MunchRun" />
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:type" content={schemaType === 'Article' ? 'article' : 'website'} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="MunchRun" />
      <meta property="og:locale" content="en_AU" />
      
      {/* Twitter Card Meta Tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;
