import { useWindowSize } from './useWindowSize'

export const useOpenUrl = () => {
  const windowSize = useWindowSize()

  const openUrl = (url: string) => {
    windowSize.width > 768 ? window.open(url) : (window.location.href = url)
  }

  return openUrl
}
