import { Image, List } from 'antd-mobile'
import Head from 'next/head'
import { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import { Projects } from '@/constant/projects'
import Layout from '@/src/layouts/base'
import imageLoader from '@/src/utils/image-loader'

import { NextPageWithLayout } from './_app'

const title = 'demo'

const Page: NextPageWithLayout = () => {
  const { t } = useTranslation()
  const isProd = process.env.NODE_ENV === 'production'
  const repo = process.env.NEXT_GITHUB_REPOSITORY
  return (
    <div className=" w-full bg-red-50">
      <Head>
        <title>{t(title)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {isProd}
        {repo}
        {imageLoader({ src: 'test' })}
      </div>
      <List>
        {Projects.map((project, index) => (
          <List.Item key={index}>
            <span className=" font-bold text-2xl ">{project.name}</span>
            <Image
              src="/Bessage/chat-main.png"
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
                src="/Bessage/WeChat_20230430002356.webm"
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
