import Head from 'next/head'
import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import { ASSEST_PREFIX } from '@/constant/config'
import { Button } from '@/src/components/Button'
import Notification from '@/src/components/Notification'
import Layout from '@/src/layouts/Base'

import { NextPageWithLayout } from './_app'

const title = 'Home'

const Page: NextPageWithLayout = () => {
  const { t } = useTranslation()

  return (
    <div className=" w-full min-h-[88vh] flex flex-col items-center justify-center  " id="container">
      <Head>
        <title>{t(title)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Notification
        text="One-stack deployment of pure static personal website based on Next Js and github workflows"
        onClick={() => window.open('https://github.com/lilawliet/my-app')}
      />

      <div className="flex flex-row gap-4 items-center justify-center mt-16">
        <Button type="primary" title="Projects" onClick={() => (window.location.href = `${ASSEST_PREFIX}/projects`)} />
        <Button type="secondary" title="About me" onClick={() => (window.location.href = `${ASSEST_PREFIX}/about`)} />
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={title}>{page}</Layout>
}

export default Page
