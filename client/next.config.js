/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1350416234,
    NEXT_PUBLIC_ZEGO_SERVER_ID : "1d73c2706f5e30c0fd05e43da52b54b4"
  },
  images: {
    domains:["localhost"],
  },
};

module.exports = nextConfig;
