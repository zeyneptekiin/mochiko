import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
};

export default nextConfig;
