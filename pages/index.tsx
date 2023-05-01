import Head from 'next/head'
import React, { ReactElement, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Notification } from '@/src/components/Notification'
import i18n from '@/src/i18n'
import Layout from '@/src/layouts/Base'

import { NextPageWithLayout } from './_app'

const title = 'Home'

const Page: NextPageWithLayout = () => {
  const { t } = useTranslation()

  useEffect(() => {
    console.log(i18n.language)
  }, [i18n.language])

  return (
    <div className=" w-full ">
      <Head>
        <title>{t(title)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" w-full flex items-center justify-center ">
        <Notification />
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={title}>{page}</Layout>
}

export default Page
