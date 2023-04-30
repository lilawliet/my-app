import { Footer } from 'antd-mobile'
import { ChipItem, LinkItem } from 'antd-mobile/es/components/footer'
import { Inter } from 'next/font/google'
import React, { ReactElement, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  const scrollHandler = () => {
    console.log(document.body.scrollTop)
    console.log('main', document.getElementById('main')?.scrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true)

    return () => window.removeEventListener('scroll', scrollHandler, false)
  }, [])

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

  const links: LinkItem[] = [
    // {
    //   text: 'github',
    //   href: 'https://github.com/lilawliet',
    // },
    {
      text: t('usage policy'),
      href: 'https://openai.com/policies/usage-policies',
    },
  ]

  return (
    <Provider store={store}>
      <GateWay>
        <>
          <Header />
          <main className={`${inter.className}`}>{children}</main>
          <Footer
            label={t('no more')}
            content="@ 2023-2024 demo.com All rights reserved"
            links={links}
            chips={chips}
          ></Footer>
        </>
      </GateWay>
    </Provider>
  )
}
