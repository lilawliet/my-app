import { Footer } from 'antd-mobile'
import { ChipItem } from 'antd-mobile/es/components/footer'
import { Inter } from 'next/font/google'
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'

import { GateWay } from '../components/Core/Gateway'
import { Header } from '../components/Header'
import store from '../store'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children?: ReactElement
  back?: ReactElement | null
  backArrow?: ReactElement | null
  onBack?: () => void
  title?: string
}) {
  // const { t } = useTranslation()

  // const chips: ChipItem[] = [
  //   {
  //     text: '简介',
  //   },
  //   {
  //     text: '内容',
  //   },
  //   {
  //     text: '其他',
  //   },
  // ]
  const chips: ChipItem[] = []

  // const links: LinkItem[] = [
  //   // {
  //   //   text: 'github',
  //   //   href: 'https://github.com/lilawliet',
  //   // },
  //   {
  //     text: t('usage policy'),
  //     href: 'https://openai.com/policies/usage-policies',
  //   },
  // ]

  return (
    <Provider store={store}>
      <GateWay>
        <>
          <Header />
          <main className={`${inter.className} md:mt-20 mt-16 md:p-4 p-2`}>
            {children}
          </main>
          <Footer
            // label={t('no more')}
            content="@ 2023-2024 demo.com All rights reserved"
            // links={links}
            chips={chips}
          ></Footer>
        </>
      </GateWay>
    </Provider>
  )
}
