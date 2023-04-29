import '@/styles/globals.css'
import 'src/i18n'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from '@/src/store'
import {
  useGlobalState,
  useUpdateLocaleCallback,
} from '@/src/store/global/hooks'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// 获取缓存并初始化
const GateWay = ({ children }: { children: ReactElement }) => {
  const global = useGlobalState()
  const updateLocale = useUpdateLocaleCallback()

  const init = () => {
    updateLocale(global.locale)
  }

  return (
    <PersistGate persistor={persistor} onBeforeLift={init}>
      {children}
    </PersistGate>
  )
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <Provider store={store}>
      <GateWay>
        <Component {...pageProps} />
      </GateWay>
    </Provider>
  )
}
