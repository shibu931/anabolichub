/** @type {import('next').NextConfig} */
import createMDX from '@next/mdx'
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "picsum.photos", 
          },
          {
            protocol: "https",
            hostname: "steroidskaufen.com", 
          },
          {
            protocol: "https",
            hostname: "anabolichub.com", 
          },
        ],
      },
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)

