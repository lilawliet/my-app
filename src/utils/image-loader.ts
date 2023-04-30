const isProd = process.env.NODE_ENV === 'production'
const repo = process.env.NEXT_PUBLIC_GITHUB_REPOSITORY

export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width?: number
  quality?: number
}) {
  return isProd ? `/${repo}/${src}?w=${width}&q=${quality || 75}` : src
}
