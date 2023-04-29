import Head from 'next/head'
import { ReactElement } from 'react'

import Layout from '@/src/layouts/base'

import { NextPageWithLayout } from './_app'

const Page: NextPageWithLayout = () => {
  // const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center justify-center bg-red-50 flex-grow flex-1 py-2 ">
      <Head>
        <title>DEMO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Demo</div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Page
