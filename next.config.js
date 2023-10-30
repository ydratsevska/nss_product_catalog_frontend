/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nss-product-catalog-api.onrender.com'],
  },
  redirects: async () => {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
