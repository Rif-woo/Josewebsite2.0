/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true, // Optimisation des polices
  experimental: {},
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|gif|webp|png|mp4|webm|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
