module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3000/api', // Example API URL
  },
  i18n: {
    locales: ['en', 'es'], // Add your supported locales here
    defaultLocale: 'en',
  },
  webpack: (config) => {
    // Custom webpack configurations can go here
    return config;
  },
};