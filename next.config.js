/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['velog.velcdn.com', 'mblogthumb-phinf.pstatic.net', 'avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/posts',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
