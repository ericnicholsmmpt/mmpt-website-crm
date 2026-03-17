import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.mmptperformance.com" }],
        destination: "https://mmptperformance.com/:path*",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "https://dashboard.mmptperformance.com/login",
        permanent: true,
      },
      {
        source: "/performance-and-fitness-programs",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/insurance-and-payment-policy-2",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
