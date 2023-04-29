/** @type {import('next').NextConfig} */

// 用于为静态资源（如图像、样式表、JavaScript 文件等）设置 URL 前缀
// 这在将应用部署到自定义域名或 CDN 上时特别有用，因为它允许您将静态资源存储在不同的位置
let assetPrefix = ``

const isGithubActions = process.env.GITHUB_ACTIONS || false

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
}

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd-mobile'],
  assetPrefix,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // loader: 'akamai',
  },
}

module.exports = nextConfig
