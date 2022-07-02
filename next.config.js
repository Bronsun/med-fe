/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withSass = require("@zeit/next-sass");
module.exports = withSass();

module.exports = withSass({
  target: 'serverless',
  env: {
    JWT_SECRET: process.env.JWT_SECRET
  }
});

module.exports = nextConfig
