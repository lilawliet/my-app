import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const updateSize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

    console.log(window.innerWidth)

    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return windowSize
}
