/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  output: 'export',
    images: {
      domains: ['woofitapp.s3.eu-north-1.amazonaws.com'],
      unoptimized: true,
    },
};

export default nextConfig;
