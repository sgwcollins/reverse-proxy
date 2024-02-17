/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/v1/:path*",
        destination: "https://cdp.customer.io/v1/:path*",
      },
    ];
  },
};
module.exports = nextConfig;

export default nextConfig;
