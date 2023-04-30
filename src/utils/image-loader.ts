const isProd = process.env.NODE_ENV === 'production'
const repo = process.env.NEXT_GITHUB_REPOSITORY

export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width?: number
  quality?: number
}) {
  const url = isProd ? `/${repo}/${src}?w=${width}&q=${quality || 75}` : src
  console.log(url)
  return url
}
