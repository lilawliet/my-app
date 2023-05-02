import Head from 'next/head'
import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'

import { ASSEST_PREFIX } from '@/constant/config'
import { Company, PROJECT, Projects } from '@/constant/projects'
import Layout from '@/src/layouts/Base'

import { NextPageWithLayout } from '../_app'

const title = 'Projects'

const Page: NextPageWithLayout = () => {
  const { t } = useTranslation()

  const ProjectItem = ({
    project,
    index,
  }: {
    project: PROJECT
    index: number
  }) => (
    // <List.Item key={index}>
    //   <span className=" font-bold text-2xl ">{project.name}</span>
    //   <Image
    //     src={`${ASSEST_PREFIX}/Bessage/chat-main.png`}
    //     alt={''}
    //     fit="cover"
    //   ></Image>
    //   <video controls autoPlay className=" w-full" style={{ width: '100%' }}>
    //     <source
    //       src={`${ASSEST_PREFIX}/Bessage/WeChat_20230430002356.webm`}
    //       type="video/mp4"
    //     />
    //     Your browser does not support the video tag.
    //   </video>
    // </List.Item>
    <div key={index} className={`${project.position} card`}>
      <div className="announce opacity-80 h-full flex-1">
        <div className="bg-card-bg w-full h-full flex flex-col md:gap-4 gap-2 md:p-4 p-2 relative">
          <span className=" font-extrabold tracking-widest text-lg text-white">
            {project.name}
            <span className="text-xs font-normal">
              {project.company && `  [${Company[project.company]}]`}
            </span>
          </span>
          <span className=" text-white font-light text-md">
            {project.description}
          </span>
          {/* <div className="announce w-full h-full z-10 opacity-30"></div> */}
          {/* <div className="announce-2 w-full h-full"></div>
        <div className="announce-3 w-full h-full"></div> */}
        </div>
      </div>
    </div>
  )

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${ASSEST_PREFIX}/Common/marble.jpg)`,
        backgroundColor: 'rgba(255,255,255,.4)',
        backgroundBlendMode: 'overlay',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}
    >
      <Head>
        <title>{t(title)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="projects-container">
          <span className="projects-timeline md:block hidden"></span>
          {Projects.map((project, index) => ProjectItem({ project, index }))}
        </div>
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout title={title}>{page}</Layout>
}

export default Page
