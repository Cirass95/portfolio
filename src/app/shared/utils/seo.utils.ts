export const generateMetaTags = (config: {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
}) => {
  return [
    { name: 'description', content: config.description },
    { name: 'keywords', content: config.keywords || 'sviluppatore frontend, angular, ionic, wordpress' },
    { property: 'og:title', content: config.ogTitle || config.title },
    { property: 'og:description', content: config.ogDescription || config.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'it_IT' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: config.ogTitle || config.title },
    { name: 'twitter:description', content: config.ogDescription || config.description }
  ];
};