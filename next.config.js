/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru", "jp"], // ✅ FIXED
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
