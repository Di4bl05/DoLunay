module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3000/api', // Example API URL
  },
  webpack: (config) => {
    // Custom webpack configurations can go here
    return config;
  },
};