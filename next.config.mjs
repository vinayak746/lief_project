/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Prepend the patch to the entry point
    const entry = config.entry;
    config.entry = async () => {
      const entries = await entry();
      const mainEntry = entries['main-app'];
      if (mainEntry && !mainEntry.includes('@ant-design/v5-patch-for-react-19')) {
        mainEntry.unshift('@ant-design/v5-patch-for-react-19');
      }
      return entries;
    };

    return config;
  },
};

export default nextConfig;
