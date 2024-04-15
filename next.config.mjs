/** @type {import('next').NextConfig} */
const nextConfig = {
 
  distDir: 'build',
      
    images: {
        domains: ['res.cloudinary.com'],
     },
     eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
      
};

export default nextConfig;
