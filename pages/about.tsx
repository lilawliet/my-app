import Head from 'next/head'
import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import { useWindowSize } from '@/src/hooks/useWindowSize'
import Layout from '@/src/layouts/Base'

import { NextPageWithLayout } from './_app'

const title = 'About me'

const Page: NextPageWithLayout = () => {
  const { t } = useTranslation()
  const windowSize = useWindowSize()

  return (
    <div className=" w-full md:min-h-[86vh] min-h-[85vh] flex flex-col items-center justify-center  " id="container">
      <Head>
        <title>{t(title)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex flex-col w-full md:p-8 p-4 items-center justify-center h-40 text-center gap-4">
        <span>黄沛威</span>
        <span>毕业于 韶关学院</span>
        <span>
          <b>
            熟悉前端主流框架从 0 到 1 的全流程搭建与开发，
            <br />
            熟悉 Python web 开发，
            <br />
            具备全栈开发能力，
            <br />
            乐于接受新技术并具备快速学习能力
            <br />
          </b>
        </span>
        <span>
          目前正在努力成为一个优秀的前端工程师，
          {/* <br /> */}
          {/* 后提高其他各方面综合能力， */}
          <br />
          乐于接受新鲜事物并且有能力学习新技能。
        </span>
        <div className="flex flex-row items-center gap-4 flex-wrap justify-center">
          <span
            onClick={() => {
              const forward = 'https://github.com/lilawliet'
              windowSize.width > 768 ? window.open(forward) : (window.location.href = forward)
            }}
            className=" underline"
          >
            github: github.com/lilawliet
          </span>
          <a href="mailto:w251754731@gmail.com" className="underline text-primary">
            email: w251754731@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={title}>{page}</Layout>
}

export default Page
