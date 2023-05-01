import { Image, List } from 'antd-mobile'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import { ASSEST_PREFIX } from '@/constant/config'
import { Projects } from '@/constant/projects'
import Layout from '@/src/layouts/Base'

import { NextPageWithLayout } from '../_app'

const title = 'Projects'

const Page: NextPageWithLayout = () => {
  const { t } = useTranslation()

  return (
    <div className=" w-full bg-red-50">
      <Head>
        <title>{t(title)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List>
        {Projects.map((project, index) => (
          <List.Item key={index}>
            <span className=" font-bold text-2xl ">{project.name}</span>
            <Image
              src={`${ASSEST_PREFIX}/Bessage/chat-main.png`}
              alt={''}
              className=" w-full"
              fit="cover"
            ></Image>
            <video
              controls
              autoPlay
              className=" w-full"
              style={{ width: '100%' }}
            >
              <source
                src={`${ASSEST_PREFIX}/Bessage/WeChat_20230430002356.webm`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </List.Item>
        ))}
      </List>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={title}>{page}</Layout>
}

export default Page
