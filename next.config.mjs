/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
  cacheHandler: "./cache-handler.js",
  cacheMaxMemorySize: 1048576,
  experimental: {
    cache: true,
  },
};

export default nextConfig;
