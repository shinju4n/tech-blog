/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["velog.velcdn.com", "mblogthumb-phinf.pstatic.net"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
