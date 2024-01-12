/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["payments.pre-bnvo.com", "upload.wikimedia.org"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
