export default function imageLoader({ src, width, quality }) {
  return `/images/${src}?w=${width}&q=${quality || 75}`
}
