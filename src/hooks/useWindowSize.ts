import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  // 手写节流
  const throttle = (fn: any, delay: any) => {
    let timerId: any
    return function (...args: any) {
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        console.log('onresize')
        fn(...args)
      }, delay)
    }
  }

  const updateSize = () =>
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

  useEffect(() => {
    const onResize = throttle(updateSize, 1000)

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return windowSize
}
