/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/v1/:path*",
        destination: "https://reverse-proxy-orpin.vercel.app/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
