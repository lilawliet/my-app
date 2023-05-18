import { useEffect } from 'react'

import { THEME } from '@/constant/commons'

import { useGlobalState } from '../store/global/hooks'
import { globalActions } from '../store/global/reducer'
import { useAppDispatch } from '../store/hooks'

export const useTheme = () => {
  const dispatch = useAppDispatch()
  const global = useGlobalState()

  const updateTheme = (theme: THEME) => {
    dispatch(globalActions.setTheme(theme))
  }

  useEffect(() => {
    global?.theme === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark')

    document.documentElement.setAttribute('data-prefers-color-scheme', global?.theme === 'dark' ? 'dark' : 'light')
  }, [global.theme])

  useEffect(() => {
    // 判断当前系统支不支持 prefers-color-scheme
    // const _hasNativePrefersColorScheme =
    //   window.matchMedia('(prefers-color-scheme)').media !== 'not all'

    // 如果不支持, 则默认为白天模式
    // if (!_hasNativePrefersColorScheme) {
    //   updateTheme('light')
    //   return
    // }

    // 在一开始进入网页时判断当前的系统主题
    // if (
    //   window.matchMedia('(prefers-color-scheme: light)').matches ||
    //   window.matchMedia('(prefers-color-scheme: no-preference)').matches
    // ) {
    //   // 当前系统主题为白天模式
    //   updateTheme('light')
    // } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //   // 当前系统主题为夜间模式
    //   updateTheme('dark')
    // }

    // 监听系统主题切换事件
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      if (event.matches) {
        updateTheme('dark')
      } else {
        updateTheme('light')
      }
    })
  })

  return {
    updateTheme,
  }
}
