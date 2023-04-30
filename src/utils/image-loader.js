const isProd = process.env.NODE_ENV === 'production'
const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

export default function imageLoader({ src, width, quality }) {
  const url = isProd ? `/${repo}/${src}?w=${width}&q=${quality || 75}` : src
  console.log(url)
  return url
}
