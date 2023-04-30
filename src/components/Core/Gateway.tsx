import React, { ReactElement } from 'react'
import { PersistGate } from 'redux-persist/integration/react'

import { persistor } from '@/src/store'
import {
  useGlobalState,
  useUpdateLocaleCallback,
} from '@/src/store/global/hooks'

// 获取&检查缓存并初始化
export const GateWay = ({ children }: { children: ReactElement }) => {
  const global = useGlobalState()
  const updateLocale = useUpdateLocaleCallback()

  const init = () => {
    updateLocale(global.language)
  }

  return (
    <PersistGate
      loading={<div>loading...</div>}
      persistor={persistor}
      onBeforeLift={init}
    >
      {children}
    </PersistGate>
  )
}
