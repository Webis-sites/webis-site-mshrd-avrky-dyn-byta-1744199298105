/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'cloudinary.com', 'beta-law.co.il'],
  },
};

module.exports = nextConfig;