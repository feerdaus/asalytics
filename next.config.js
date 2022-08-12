/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["algorand-wallet-mainnet.s3.amazonaws.com", "ik.imagekit.io"],
  },
};

module.exports = nextConfig;
