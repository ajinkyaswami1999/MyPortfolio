import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/asset-manifest",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/transmission-tower",
        permanent: true,
      },
      {
        source: "/voxelique",
        destination: "/creative-sector",
        permanent: true,
      },
      {
        source: "/toolique",
        destination: "/creative-sector",
        permanent: true,
      },
      {
        source: "/photography",
        destination: "/creative-sector",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
