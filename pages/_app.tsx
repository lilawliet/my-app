import '@/styles/components.scss'
import '@/styles/github-corner.css'
import '@/styles/globals.scss'
import '@/styles/header.scss'
import '@/styles/projects.scss'
import '@/styles/constants.scss'
import 'src/i18n'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React, { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
