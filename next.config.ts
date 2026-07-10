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
        source: "/creative-sector",
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
        destination: "/asset-manifest",
        permanent: true,
      },
      {
        source: "/toolique",
        destination: "/asset-manifest",
        permanent: true,
      },
      {
        source: "/photography",
        destination: "/asset-manifest",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
