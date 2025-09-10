/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'velog.velcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'mblogthumb-phinf.pstatic.net',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
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
