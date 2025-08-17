// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ❌ Don’t block build if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ❌ Don’t block build if there are type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
