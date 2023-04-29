/** @type {import('next').NextConfig} */

// 用于为静态资源（如图像、样式表、JavaScript 文件等）设置 URL 前缀
// 这在将应用部署到自定义域名或 CDN 上时特别有用，因为它允许您将静态资源存储在不同的位置
const assetPrefix = ``

// 用于为应用设置基础路径
// 这在将应用部署到子目录下时特别有用，因为它允许您指定应用所在的目录
// const basePath = `/`

const isGithubActions = process.env.GITHUB_ACTIONS || false

if (isGithubActions) {
  // 去掉 `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  // basePath = `/${repo}`
}
// console.log(basePath)

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd-mobile'],
  assetPrefix,
  // basePath,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
