/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["velog.velcdn.com", "mblogthumb-phinf.pstatic.net"],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/posts?category=FE",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
