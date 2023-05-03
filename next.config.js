/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");

const nextConfig = {
  experimental: {
    esmExternals: false,
  },
  i18n,
};

module.exports = nextConfig;
