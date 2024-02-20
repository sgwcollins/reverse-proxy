/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/v1/:path*",
        destination: "https://cdp.customer.io/v1/:path*",
        // destination: "http://localhost:3000/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
